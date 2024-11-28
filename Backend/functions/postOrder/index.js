const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");
const { v4: uuid4 } = require("uuid");

exports.handler = async (event) => {
  try {
    // Extrahera menuID från event.body
    const body = JSON.parse(event.body);
    const menuID = body.menuID;

    // 1. Hämta menyinformation från taoMenu
    const menuParams = {
      TableName: 'taoMenu',
      Key: { menuID },
    };

    // Ingen `.promise()` behövs här
    const menuData = await db.get(menuParams);

    if (!menuData.Item) {
      return sendError(404, 'Menu item not found');
    }

    // 2. Lägg till all menyinformation i ordern
    const orderID = uuid4();
    const orderParams = {
      TableName: 'taoOrders',
      Item: {
        orderID,
        menuID,
        name: menuData.Item.name,
        price: menuData.Item.price,
        ingredients: menuData.Item.ingredients, // Ingen JSON.parse om det är JSON
        timestamp: new Date().toISOString(),
      },
    };

    // Ingen `.promise()` här heller
    await db.put(orderParams);

    // Returnera framgångsmeddelande
    return sendResponse(200, { message: 'Order created successfully', orderID });
  } catch (error) {
    console.error('Error creating order:', error);
    return sendError(500, 'Internal server error');
  }
};
