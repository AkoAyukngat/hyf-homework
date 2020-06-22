const express = require("express");
const app = express.Router();
const mealsRouter = require("../data/meals.json");
const reviewsRouter = require("../data/reviews.json");

//Respond with the json for all the meals
app.get("/meals", (req, res) => {
  mealsRouter.forEach((meal) => {
    meal.reviewsRouter = reviewsRouter.filter(
      (review) => meal.id === review.mealId
    );
    return meal;
  });

  res.send(mealsRouter);
});

module.exports = app;
