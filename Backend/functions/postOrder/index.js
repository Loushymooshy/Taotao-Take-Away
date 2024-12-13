const { db } = require("../../services/db");
const { v4: uuid4 } = require("uuid");
const { checkApiKey } = require("../../middleware/checkApiKey");

exports.handler = async (event) => {
  // Kontrollera API-nyckeln
  const apiKeyError = checkApiKey(event);
  if (apiKeyError) {
    return apiKeyError; // Returnera fel om nyckeln inte är giltig
  }
  try {
    const body = JSON.parse(event.body);
    console.log("Received body:", event.body);
    const { items, total } = body;

    if (!items || items.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No items provided" }),
      };
    }

    console.log("Validating items:", items); // Log items before querying
    const validItems = await Promise.all(
      items.map(async (item) => {
        console.log("Validating menuID:", item.menuID); // Log each menuID being queried
        const menuID = String(item.menuID);
        const params = { TableName: "taoMenu", Key: { menuID } };
        const data = await db.get(params);
        console.log("Menu item data:", data); // Log the data fetched from the database
        return data.Item || null;
      })
    );

    if (validItems.some((item) => !item)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Invalid menuID in items" }),
      };
    }

    const ingredients = validItems.flatMap((item) => item.ingredients || []);

    // 2. Kontrollera ingredienser i taoStockpile
    const insufficientStock = [];
    for (const ingredient of ingredients) {
      const stockParams = {
        TableName: "taoStockpile",
        Key: { ingredient },
      };

      const stockData = await db.get(stockParams);
      if (!stockData.Item || stockData.Item.quantity < 1) {
        insufficientStock.push(ingredient); // Lägg till saknade ingredienser
      }
    }

    // Om lager inte räcker, returnera fel
    if (insufficientStock.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Insufficient stock for ingredients",
          insufficient: insufficientStock,
        }),
      };
    }
    // 3. Uppdatera lagret i taoStockpile
    for (const ingredient of ingredients) {
      const updateParams = {
        TableName: "taoStockpile",
        Key: { ingredient },
        UpdateExpression: "SET quantity = quantity - :decrement",
        ExpressionAttributeValues: {
          ":decrement": 1,
        },
      };
      await db.update(updateParams);
    }

    // 4. Skapa order i taoOrders
    const orderID = uuid4();
    const timestamp = new Date().toISOString();
    const orderParams = {
      TableName: "taoOrders",
      Item: {
        orderID,
        items,
        total,
        timestamp,
      },
    };
    console.log("Inserting order:", orderParams);
    await db.put(orderParams);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Order created successfully",
        orderID,
      }),
    };
  } catch (error) {
    console.error("Error creating order:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
