const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("node.js week 2 homework"));

//GET/In response send sum (first + second).
app.get("/numbers/add", (req, res) => {
  const first = parseInt(req.query.first);
  const second = parseInt(req.query.second);
  const sum = first + second;
  res.send(`Adding ${first} and ${second} is equal to ${sum}.`);
});

//GET/In response send multiplication (first * second).
app.get("/numbers/multiply/:firstNumber/:secondNumber", (req, res) => {
  const firstNumber = parseInt(req.params.firstNumber);
  const secondNumber = parseInt(req.params.secondNumber);
  const sum2 = firstNumber * secondNumber;
  res.send(`Multiplying ${firstNumber} and ${secondNumber} will give ${sum2}.`);
});

app.listen(port, () => console.log(`Calculator:listening on port ${port}`));
