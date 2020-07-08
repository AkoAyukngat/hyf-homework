const express = require("express");
const app = express();
const router = express.Router();
const knex = require("../database");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//GET api/meals/ query parameters:

router.get("/", async function (req, res) {
  const {
    maxPrice,
    title,
    availableReservations,
    createdAfter,
    limit,
  } = req.query;
  const mealTitles = await knex.select("*").table("meal");

  if (Object.keys(req.query).length === 0) {
    res.send(mealTitles);
  }

  if (maxPrice) {
    try {
      const mealsMaxPrice = await knex
        .select("*")
        .table("meal")
        .where("price", "<", maxPrice);
      res.send(mealsMaxPrice);
    } catch (error) {
      error;
    }
  } else if (title) {
    try {
      const titles = await knex
        .select("*")
        .table("meal")
        .where("title", "like", `%${title}%`);
      res.send(titles);
    } catch (error) {
      error;
    }
  } else if (availableReservations === "true") {
    try {
      const mealsWithAvailableReservations = await knex
        .select("*")
        .sum({
          sumTotal: "reservation.number_of_guests",
        })
        .table("meal")
        .join("reservation", {
          "meal.id": "reservation.meal_id",
        })
        .groupBy("meal.title")
        .having("sumTotal", ">", "max_reservations");
      res.send(mealsWithAvailableReservations);
    } catch (error) {
      error;
    }
  } else if (createdAfter) {
    try {
      const createdDate = await knex
        .select("*")
        .table("meal")
        .where("created_date", "<", createdAfter);
      res.send(createdDate);
    } catch (error) {
      error;
    }
  } else if (limit) {
    try {
      const mealsLimit = await knex.select("*").table("meal").limit(limit);
      res.send(mealsLimit);
    } catch (error) {
      error;
    }
  }
});

//POST  to api/meals/:

router.post("/", async function (req, res) {
  const addMeal = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    location: req.body.location,
    due_date: req.body.due_date,
    max_reservations: req.body.max_reservations,
    price: req.body.price,
    created_date: req.body.created_date,
  };
  await knex("meal").insert(addMeal);
  res.send("New Meal Added");
  console.log("addMeal");
});

//GET api/meals/{id}:

router.get("/:id", async function (req, res) {
  const getMealById = await knex("meal").where({ id: req.params.id });
  res.send(getMealById);
});

//PUT api/meals/{id}:

router.put("/:id", async function (req, res) {
  const updateMealById = await knex("meal")
    .where({ id: req.params.id })
    .update({ title: req.query.title });
  res.send(`meal with this:${updateMealById} has been updated`);
});

//DELETE api/meals/{id}:

router.delete("/:id", async function (req, res) {
  const deleteMealById = await knex("meal")
    .where({
      id: req.params.id,
    })
    .del();
  res.send(`Meal with id ${deleteMealById} was deleted`);
});

module.exports = router;
