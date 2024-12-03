const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");
const { checkApiKey } = require("../../middleware/checkApiKey");

async function getMenu() {
  const { Items } = await db.scan({
    TableName: "taoMenu",
  });

  return Items;
}

exports.handler = async (event) => {
  // Kontrollera API-nyckeln
  const apiKeyError = checkApiKey(event);
  if (apiKeyError) {
    return apiKeyError; // Returnera fel om nyckeln inte är giltig
  }
  try {
    const data = await getMenu();
    return sendResponse(data);
  } catch (error) {
    return sendError(500, error);
  }
};
