const express = require("express");
const app = express.Router();
const meals = require("../data/meals.json");

//json for a random meal including its review
app.get("/meal", (req, res) => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  res.send(randomMeal);
});

module.exports = app;
