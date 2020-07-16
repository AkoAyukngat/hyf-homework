const express = require("express");
const app = express.Router();
const mealsRouter = require("../data/meals.json");
const reviewsRouter = require("../data/reviews.json");

//json for all the meals that can fit lots of people w/ reviews
app.get("/large-meals", (req, res) => {
  const largeMeals = mealsRouter
    .filter((meal) => meal.maxNumberOfGuests >= 7)
    .map((meal) => {
      meal.reviewsRouter = reviewsRouter.filter(
        (review) => meal.id === review.mealId
      );
      return meal;
    });
  res.send(largeMeals);
});

module.exports = app;
