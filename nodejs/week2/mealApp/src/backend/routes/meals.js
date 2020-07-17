const express = require("express");
const app = express.Router();
const mealsRouter = require("../data/meals.json");

//json for the meal with corresponding id:
app.get("/:id", (req, res) => {
  const id = req.params.id;
  if (!isNaN(id)) {
    const getMealById = mealsRouter.filter((meal) => meal.id === parseInt(id));

    if (getMealById.length === 0) {
      return res.status(404).send(`Meal with the  id ${id} is not found`);
    }
    res.send(getMealById);
  }
  return res.status(400).send(`Bad request, ${id} is not a number`);
});

//Respond with the json for all the meals
//Get meals that has a price smaller than maxPrice
//Get meals that partially match a title
//Get meals that has been created after the date
//Only specific number of meals

app.get("/", (req, res) => {
  const { maxPrice, title, createdAfterDate, limit } = req.query;

  if (maxPrice) {
    const parsedPrice = parseFloat(maxPrice);
    if (!isNaN(parsedPrice)) {
      const priceLessThanMaxPrice = mealsRouter.filter(
        (meal) => meal.price < parseFloat(maxPrice)
      );
      if (priceLessThanMaxPrice.length === 0) {
        return res.status(404).send("No meals available at this price");
      }
      return res.json(priceLessThanMaxPrice);
    }
    return res.status(400).send(`Bad request, ${maxPrice} is not a number`);
  }
  if (title) {
    const mealsWithCorrTitle = mealsRouter.filter((meal) =>
      meal.title.toLowerCase().includes(title.toLowerCase())
    );
    if (mealsWithCorrTitle.length === 0) {
      return res.status(404).send(`No meal corresponds with the word ${title}`);
    }
    res.send(mealsWithCorrTitle);
  }
  if (createdAfterDate) {
    const mealsCreatedAfter = mealsRouter.filter(
      (meal) => Date.parse(meal.createdAt) > createdAfterDate
    );

    if (mealsCreatedAfter.length === 0) {
      return res
        .status(404)
        .send(`No meal that has been created after ${createdAfterDate}`);
    }
    return res.json(mealsCreatedAfter);
  }

  if (limit) {
    const displayMealsWithLimit = mealsRouter.filter(
      (meal) => meal.id <= parseInt(limit)
    );

    if (displayMealsWithLimit.length === 0) {
      return res.status(400).send(`Bad request, ${limit} is not a number`);
    }
    res.send(displayMealsWithLimit);
  }
  res.send(mealsRouter);
});

module.exports = app;
