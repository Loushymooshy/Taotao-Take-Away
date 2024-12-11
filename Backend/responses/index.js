function sendResponse(data) {
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Allow all origins (change this for production to specific domains)
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE", // Allow all necessary HTTP methods
      "Access-Control-Allow-Headers": "Content-Type, Authorization", // Allow necessary headers
    },
    body: JSON.stringify({
      data,
    }),
  };
}

function sendError(statusCode, errorMessage) {
  return {
    statusCode: statusCode,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
    body: JSON.stringify({ errorMessage }),
  };
}

module.exports = { sendResponse, sendError };
