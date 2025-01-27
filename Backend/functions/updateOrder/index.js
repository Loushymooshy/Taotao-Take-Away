const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");
const { verifyToken } = require("../../middleware/verifyToken");
const { checkApiKey } = require("../../middleware/checkApiKey");

async function updateOrder(orderID, updates) {
  delete updates.orderID;

  const params = {
    TableName: "taoOrders",
    Key: { orderID },
    UpdateExpression:
      "set " +
      Object.keys(updates)
        .map((key, index) => `#${key} = :value${index}`)
        .join(", "),
    ExpressionAttributeNames: Object.keys(updates).reduce(
      (acc, key) => ({
        ...acc,
        [`#${key}`]: key,
      }),
      {}
    ),
    ExpressionAttributeValues: Object.keys(updates).reduce(
      (acc, key, index) => ({
        ...acc,
        [`:value${index}`]: updates[key],
      }),
      {}
    ),
    ReturnValues: "ALL_NEW",
  };
  try {
    const result = await db.update(params);
    return result.Item;
  } catch (error) {
    console.error("Error updating order:", error);
    throw error; // This will be caught in the handler
  }
}

exports.handler = async (event) => {
  try {
    // First, validate the API key
    const apiKeyError = checkApiKey(event);
    if (apiKeyError) {
      return apiKeyError; // Return error if apikey isnt eligble
    }

    // Next, validate the JWT token
    const tokenValidationResult = await verifyToken(["admin"])(event);
    if (tokenValidationResult.statusCode !== 200) {
      return tokenValidationResult;
    }

    // Continue with your logic...
    const orderID = event.pathParameters.orderID;
    const updates = JSON.parse(event.body);

    try {
      const updatedOrder = await updateOrder(orderID, updates);
      return sendResponse(updatedOrder);
    } catch (error) {
      console.error("Error updating order:", error);
      return sendError(500, "Failed to update order", error.message);
    }
  } catch (error) {
    console.error("Unexpected error in handler:", error);
    return sendError(500, "Internal Server Error", error.message);
  }
};
