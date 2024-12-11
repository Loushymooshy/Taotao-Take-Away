const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");
const { checkApiKey } = require("../../middleware/checkApiKey");

async function getMenu() {
  // Step 1: Fetch all menu items from taoMenu
  const { Items } = await db.scan({
    TableName: "taoMenu",
  });

  return Items;
}

exports.handler = async (event) => {
  // Check the apikey
  const apiKeyError = checkApiKey(event);
  if (apiKeyError) {
    return apiKeyError; // Return error if apikey isnt eligble
  }
  try {
    const data = await getMenu();
    return sendResponse(data);
  } catch (error) {
    console.error("Error fetching menu:", error);
    return sendError(500, error);
  }
};
