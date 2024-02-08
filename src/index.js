const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
const port = 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
  });

app.get('/add', (req, res) => {
    const num1 = parseFloat(req.query.num1);
    const num2 = parseFloat(req.query.num2);

    if (!isNaN(num1) && !isNaN(num2)) {
        const sum = num1 + num2;
        res.send(`Sum of ${num1} and ${num2} is: ${sum}`);
    } else {
        res.status(400).send('Invalid input. Please provide valid numbers.');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
