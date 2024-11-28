const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function getStock() {
  const { Items } = await db.scan({
    TableName: "taoStock",
  });

  return Items;
}

exports.handler = async (event) => {
  try {
    const data = await getStock();
    return sendResponse(data);
  } catch (error) {
    return sendError(500, error);
  }
};
