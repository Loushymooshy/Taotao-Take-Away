const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function updateOrder(orderID, updates) {
  const params = {
    TableName: "taoOrders",
    Key: { orderID },
    UpdateExpression: "set " + Object.keys(updates).map((key, index) => `#${key} = :value${index}`).join(", "),
    ExpressionAttributeNames: Object.keys(updates).reduce((acc, key) => ({ ...acc, [`#${key}`]: key }), {}),
    ExpressionAttributeValues: Object.keys(updates).reduce((acc, key, index) => ({ ...acc, [`:value${index}`]: updates[key] }), {}),
    ReturnValues: "ALL_NEW"
  };

  console.log("Updating order with params:", JSON.stringify(params, null, 2));

  const result = await db.update(params).promise();
  return result.Attributes;
}

exports.handler = async (event) => {
  const orderID = event.pathParameters.orderID;
  const updates = JSON.parse(event.body);

  console.log("Received update request for orderID:", orderID);
  console.log("Updates:", JSON.stringify(updates, null, 2));

  try {
    const updatedOrder = await updateOrder(orderID, updates);
    return sendResponse(updatedOrder);
  } catch (error) {
    console.error("Error updating order:", error);
    return sendError(500, error);
  }
};