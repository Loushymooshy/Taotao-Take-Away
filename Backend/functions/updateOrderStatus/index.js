const { db } = require("../../services/db");
const { checkApiKey } = require("../../middleware/checkApiKey");
const { verifyToken } = require("../../middleware/verifyToken");

exports.handler = async (event) => {
  console.log("Incoming event:", event); // Logga hela inkommande event

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

    const { orderID, status } = body;

    if (!orderID || !status) {
      console.error("Missing orderID or status in request body");
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "orderID and status are required" }),
      };
    }

    // Uppdatera status i DynamoDB
    const updateParams = {
      TableName: "taoOrders",
      Key: {
        orderID: orderID, // Kontrollera att denna key matchar tabellen exakt
      },
      UpdateExpression: "SET #status = :status",
      ExpressionAttributeNames: {
        "#status": "status",
      },
      ExpressionAttributeValues: {
        ":status": status,
      },
    };

    console.log("Update params:", updateParams);

    // Utför uppdatering utan .promise()
    const result = await db.update(updateParams);
    console.log("DynamoDB update result:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Order status updated successfully" }),
    };
  } catch (error) {
    console.error("Error updating order status:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
