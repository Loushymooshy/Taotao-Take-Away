const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function getOrders() {
  const { Items } = await db.scan({
    TableName: "taoOrders",
  });

  return Items;
}

exports.handler = async (event) => {
  try {
    const data = await getOrders();
    return sendResponse(data);
  } catch (error) {
    return sendError(500, error);
  }
};
