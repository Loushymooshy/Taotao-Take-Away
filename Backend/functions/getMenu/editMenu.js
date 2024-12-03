const { db } = require("../../services/db");
const { verifyToken } = require("../../middleware/verifyToken");
const { checkApiKey } = require("../../middleware/checkApiKey");

exports.handler = async (event) => {
  // Kontrollera API-nyckeln
  const apiKeyError = checkApiKey(event);
  if (apiKeyError) {
    return apiKeyError;
  }

  // Kontrollera JWT-token och roll
  const tokenValidationResult = await verifyToken(["admin"])(event);
  if (tokenValidationResult.statusCode !== 200) {
    return tokenValidationResult;
  }

  try {
    const body = JSON.parse(event.body);
    const { menuID, updates } = body;

    if (!menuID || !updates) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "menuID and updates are required" }),
      };
    }

    const updateParams = {
      TableName: "taoMenu",
      Key: { menuID },
      UpdateExpression: "SET #name = :name, price = :price",
      ExpressionAttributeNames: {
        "#name": "name",
      },
      ExpressionAttributeValues: {
        ":name": updates.name,
        ":price": updates.price,
      },
    };

    await db.update(updateParams);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Menu item updated successfully" }),
    };
  } catch (error) {
    console.error("Error editing menu:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
