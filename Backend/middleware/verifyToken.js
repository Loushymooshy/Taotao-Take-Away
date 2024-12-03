const jwt = require("jsonwebtoken");

exports.verifyToken = (allowedRoles) => {
  return async (event) => {
    try {
      const authHeader = event.headers.Authorization || event.headers.authorization;
      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return {
          statusCode: 401,
          body: JSON.stringify({ error: "No token provided" }),
        };
      }

      const token = authHeader.split(" ")[1];
      const decoded = jwt.verify(token, "your_secret_key");

      if (!allowedRoles.includes(decoded.role)) {
        return {
          statusCode: 403,
          body: JSON.stringify({ error: "Access denied" }),
        };
      }

      event.user = decoded; // Lägg till användarinformation i eventet
      return { statusCode: 200 }; // Returnera OK om allt är korrekt
    } catch (error) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Invalid or expired token" }),
      };
    }
  };
};
