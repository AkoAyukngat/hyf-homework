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

//GET api/reviews/:

router.get("/", async function (req, res) {
  const allReviews = await knex.select("*").table("review");
  res.send(allReviews);
});

//POST api/reviews/:

router.get("/", async function (req, res) {
  const addReview = {
    id: req.body.id,
    title: req.body.title,
    description: req.body.description,
    meal_id: req.body.meal_id,
    ratings: req.body.ratings,
    created_date: req.body.created_date,
  };
  await knex("review").insert(addReview);
  res.send("New review added");
});

//GET api/reviews/{id}:

router.get("/:id", async function (req, res) {
  const getReviewById = await knex("review").where({
    id: req.params.id,
  });
  res.send(getReviewById);
});

//PUT api/reviews/{id}:

router.put("/:id", async function (req, res) {
  const updateReviewById = await knex("review")
    .where({ id: req.params.id })
    .update({ description: req.query.description });
  res.send(`Review with this:${updateReviewById} has been updated`);
});

//DELETE api/reviews/{id}:

router.delete("/:id", async function (req, res) {
  const deleteReviewById = await knex("review")
    .where({
      id: req.params.id,
    })
    .del();
  res.send(`Review with id ${deleteReviewById} was deleted`);
});

module.exports = router;
