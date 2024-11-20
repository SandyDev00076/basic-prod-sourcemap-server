const express = require("express");
const path = require("path");

const app = express();
const PORT = 5050;

// Serve static files from the 'dist/maps' directory
app.use("/maps", express.static(path.join(__dirname, "dist/maps")));

// Default route to check the server
app.get("/", (req, res) => {
  res.send("Source Map Server is running! Access maps at /maps/<filename>.");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
