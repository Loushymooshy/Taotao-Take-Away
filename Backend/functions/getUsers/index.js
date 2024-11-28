const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");

async function getUsers() {
  const { Items } = await db.scan({
    TableName: "taoUsers",
  });

  return Items;
}

exports.handler = async (event) => {
  try {
    const data = await getUsers();
    return sendResponse(data);
  } catch (error) {
    return sendError(500, error);
  }
};
