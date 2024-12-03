const { sendResponse, sendError } = require("../../responses/index");
const { db } = require("../../services/db");
const { checkApiKey } = require("../../middleware/checkApiKey");
const { verifyToken } = require("../../middleware/verifyToken");

async function getStock() {
  const { Items } = await db.scan({
    TableName: "taoStockpile",
  });

  return Items;
}

exports.handler = async (event) => {
  // Kontrollera API-nyckeln
  const apiKeyError = checkApiKey(event);
  if (apiKeyError) {
    return apiKeyError; // Returnera fel om nyckeln är ogiltig
  }

  // Kontrollera att användaren är admin
  const tokenValidationResult = await verifyToken(["admin"])(event);
  if (tokenValidationResult.statusCode !== 200) {
    return tokenValidationResult; // Returnera fel om användaren inte är admin
  }

  try {
    const data = await getStock();
    return sendResponse(data);
  } catch (error) {
    console.error("Error fetching stock:", error);
    return sendError(500, error);
  }
};
