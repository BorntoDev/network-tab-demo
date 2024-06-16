// server.js
const express = require("express");
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static("public"));

// API endpoint to simulate a network request
app.get("/api/data", (req, res) => {
  setTimeout(() => {
    res.json({ message: "Hello from the server!" });
  }, 2000); // Simulate network latency
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
