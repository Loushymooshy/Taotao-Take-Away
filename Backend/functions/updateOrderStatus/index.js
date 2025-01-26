const { db } = require("../../services/db");
const { checkApiKey } = require("../../middleware/checkApiKey");
const { verifyToken } = require("../../middleware/verifyToken");

exports.handler = async (event) => {
  console.log("Incoming event:", event); // Log incoming event

  // Kontrollera API-nyckeln
  const apiKeyError = checkApiKey(event);
  if (apiKeyError) {
    console.error("API Key Error:", apiKeyError);
    return apiKeyError;
  }

  try {
    // Verifiera att användaren är inloggad som admin
    const tokenResult = await verifyToken(["admin"])(event);
    if (tokenResult.statusCode !== 200) {
      console.error("Token Error:", tokenResult);
      return tokenResult;
    }

    // Hämta orderID och ny status från body
    const body = JSON.parse(event.body);
    console.log("Parsed body:", body);

    const { orderID, newStatus } = body;

    if (!orderID || !newStatus) {
      console.error("Missing orderID or newStatus in request body");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "orderID and newStatus are required" }),
      };
    }

    // Uppdatera status i DynamoDB
    const updateParams = {
      TableName: "taoOrders",
      Key: {
        orderID, // Kontrollera att denna nyckel matchar tabellen exakt
      },
      UpdateExpression: "SET #status = :newStatus",
      ExpressionAttributeNames: {
        "#status": "status", // Undviker reserverade ord
      },
      ExpressionAttributeValues: {
        ":newStatus": newStatus,
      },
      ReturnValues: "ALL_NEW",
    };

    console.log("Update params:", updateParams);

    // Utför uppdatering
    const result = await db.update(updateParams).promise();
    console.log("DynamoDB update result:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Order status updated successfully",
        updatedOrder: result.Attributes,
      }),
    };
  } catch (error) {
    console.error("Error updating order status:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
