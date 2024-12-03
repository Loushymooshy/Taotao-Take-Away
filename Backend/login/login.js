const jwt = require("jsonwebtoken");
const users = require("../functions/getUsers/users")

exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { username, password } = body;

    if (!username || !password) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Username and password are required" }),
      };
    }

    // Kontrollera användare
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: "Invalid credentials" }),
      };
    }

    // Generera JWT-token
    const token = jwt.sign(
      {
        userID: user.userID,
        username: user.username,
        role: user.role,
      },
      "your_secret_key", // Byt ut till en säker hemlighet
      { expiresIn: "1h" } // Token gäller i 1 timme
    );

    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Login successful",
        token, // Skickar token till klienten
      }),
    };
  } catch (error) {
    console.error("Error during login:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
