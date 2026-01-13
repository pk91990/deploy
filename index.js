const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running successfully!");
});

// Test API
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello from backend",
    status: "success"
  });
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
