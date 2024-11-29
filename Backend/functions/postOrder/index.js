const { db } = require("../../services/db");
const { v4: uuid4 } = require("uuid");

exports.handler = async (event) => {
  try {
    // Extrahera menuID från event.body
    const body = JSON.parse(event.body);
    const menuID = body.menuID;

    if (!menuID) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "menuID is required" }),
      };
    }

    // 1. Hämta menyinformation från taoMenu
    const menuParams = {
      TableName: "taoMenu",
      Key: { menuID },
    };

    const menuData = await db.get(menuParams);
    if (!menuData.Item) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: "Menu item not found" }),
      };
    }

    const ingredients = menuData.Item.ingredients; // Ingredienser från menydata

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
    const orderParams = {
      TableName: "taoOrders",
      Item: {
        orderID,
        menuID,
        name: menuData.Item.name,
        price: menuData.Item.price,
        ingredients,
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
