const { API_KEY } = require("../config/config");

exports.checkApiKey = (event) => {
  const apiKey = event.headers["x-api-key"]; // Kontrollera API-nyckel i headers

  if (!apiKey || apiKey !== API_KEY) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: "Invalid or missing API key" }),
    };
  }

  return null; // Om nyckeln är korrekt, returnera inget fel
};
