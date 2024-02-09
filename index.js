// server.js
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;
const path = require("path");

app.use(cors({}));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Route to add two numbers
app.get("/add", (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);

  if (!isNaN(num1) && !isNaN(num2)) {
    const sum = num1 + num2;
    res.json({ result: sum });
  } else {
    res
      .status(400)
      .json({ error: "Invalid input. Please provide valid numbers." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
