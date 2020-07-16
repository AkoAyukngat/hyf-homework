const express = require("express");
const app = express.Router();
const meals = require("../data/meals.json");
const reviews = require("../data/reviews.json");

//json for a random meal including its review
app.get("/meal", (req, res) => {
  const randomMeal = meals[Math.floor(Math.random() * meals.length)];
  meals.forEach((meal) => {
    meal.reviews = reviews.filter((review) => meal.id === review.mealId);
    return meal;
  });

  res.send(randomMeal);
});

module.exports = app;
