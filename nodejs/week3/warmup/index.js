const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Getting data through query parameters:
app.get("/calculator/:method", (req, res) => {
  const arrayOfNumbers = Object.values(req.query);
  const merged = [].concat.apply([], arrayOfNumbers); // to add the same param twice
  const numbersToCalculate = merged.map(Number); // Calls Number on each value in the array (casting it to a number)
  if (req.params.method === "multiply") {
    const multiplicationOfNumbers = numbersToCalculate.reduce(
      (total, num) => total * num
    );
    res.send(`Multiplication answer is ${multiplicationOfNumbers}`);
  } else if (req.params.method === "add") {
    const additionOfNumbers = numbersToCalculate.reduce(
      (total, num) => total + num
    );
    res.send(`Addition answer is ${additionOfNumbers}`);
  } else if (req.params.method === "divide") {
    const divisionOfNumbers = numbersToCalculate.reduce(
      (total, num) => total / num
    );
    res.send(`Division answer is ${divisionOfNumbers}`);
  } else if (req.params.method === "subtract") {
    const subtractionOfNumbers = numbersToCalculate.reduce(
      (total, num) => total - num
    );
    res.send(`${subtractionOfNumbers}`);
  }
});

//Getting data through the request body:

app.post("/calculator", (req, res) => {
  console.log("body", req.body);
  const method = req.body.method;
  const arrayOfNumbers = Object.values(req.query);
  const merged = [].concat.apply([], arrayOfNumbers);
  const numbersToCalculate = merged.map(Number);

  if (method === "multiply") {
    const multiplyNumbers = numbersToCalculate.reduce(
      (total, num) => total * num
    );
    res.send(`Multiplication answer is ${multiplyNumbers}`);
  } else if (method === "add") {
    const addNumbers = numbersToCalculate.reduce((total, num) => total + num);
    res.send(`Addition answer is ${addNumbers}`);
  } else if (method === "divide") {
    const divideNumbers = numbersToCalculate.reduce(
      (total, num) => total / num
    );
    res.send(`Division answer is ${divideNumbers}`);
  } else if (method === "subtract") {
    const subtractNumbers = numbersToCalculate.reduce(
      (total, num) => total - num
    );
    res.send(`Subtraction answer is ${subtractNumbers}`);
  }
});

app.listen(PORT, () => {
  console.log(`Express server currently running on port ${PORT}`);
});
