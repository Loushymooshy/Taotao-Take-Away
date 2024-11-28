const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function getMenu() {
  const { Items } = await db.scan({
    TableName: "taoMenu",
  });

  return Items;
}

exports.handler = async (event) => {
  try {
    const data = await getMenu();
    return sendResponse(data);
  } catch (error) {
    return sendError(500, error);
  }
};
