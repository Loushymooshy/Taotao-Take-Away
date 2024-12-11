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
    // Extrahera varukorg och kommentar från event.body
    const body = JSON.parse(event.body);
    const { items, comment } = body;

    if (!items || items.length === 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Cart is empty" }),
      };
    }

    // Kontrollera lagerstatus och uppdatera lagret för varje artikel
    const insufficientStock = [];
    for (const item of items) {
      const menuParams = {
        TableName: "taoMenu",
        Key: { menuID: item.menuID },
      };

      const menuData = await db.get(menuParams);
      if (!menuData.Item) {
        return {
          statusCode: 404,
          body: JSON.stringify({ error: `Menu item not found: ${item.menuID}` }),
        };
      }

      const ingredients = menuData.Item.ingredients; // Ingredienser från menydata
      for (const ingredient of ingredients) {
        const stockParams = {
          TableName: "taoStockpile",
          Key: { ingredient },
        };

        const stockData = await db.get(stockParams);
        if (!stockData.Item || stockData.Item.quantity < item.quantity) {
          insufficientStock.push({
            ingredient,
            required: item.quantity,
            available: stockData.Item ? stockData.Item.quantity : 0,
          });
        }
      }
    }

    // Om lager inte räcker, returnera fel
    if (insufficientStock.length > 0) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Insufficient stock for some items",
          insufficient: insufficientStock,
        }),
      };
    }

    // Uppdatera lagret
    for (const item of items) {
      const menuParams = {
        TableName: "taoMenu",
        Key: { menuID: item.menuID },
      };

      const menuData = await db.get(menuParams);
      const ingredients = menuData.Item.ingredients;

      for (const ingredient of ingredients) {
        const updateParams = {
          TableName: "taoStockpile",
          Key: { ingredient },
          UpdateExpression: "SET quantity = quantity - :decrement",
          ExpressionAttributeValues: {
            ":decrement": item.quantity,
          },
        };
        await db.update(updateParams);
      }
    }

    // Skapa order
    const orderID = uuid4();
    const orderParams = {
      TableName: "taoOrders",
      Item: {
        orderID,
        items, // Hela varukorgen
        comment, // Kommentar till kocken
        status: "Pending", // Första statusen
        timestamp: new Date().toISOString(),
      },
    };

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
