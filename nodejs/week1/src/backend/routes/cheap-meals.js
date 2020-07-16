const express = require("express");
const app = express.Router();
const mealsRouter = require("../data/meals.json");
const reviewsRouter = require("../data/reviews.json");

app.get("/cheap-meals", (req, res) => {
  const cheapMeals = mealsRouter
    .filter((meal) => meal.price < 100)
    .map((meal) => {
      meal.reviewsRouter = reviewsRouter.filter((review) => meal.id === review.mealId);
      return meal;
    });

  res.send(cheapMeals);
});

module.exports = app;
