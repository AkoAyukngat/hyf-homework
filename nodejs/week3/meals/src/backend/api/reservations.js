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

//GET api/reservations/:

router.get("/", async function (req, res) {
  const allReservations = await knex.select("*").table("reservation");
  res.send(allReservations);
});

//POST api/reservations/:
router.get("/", async function (req, res) {
  const addReservation = {
    id: req.body.id,
    number_of_guests: req.body.number_of_guests,
    meal_id: req.body.meal_id,
    created_date: req.body.created_date,
  };
  await knex("reservation").insert(addReservation);
  res.send("New reservation added");
});

//GET api/reservations/{id}:

router.get("/:id", async function (req, res) {
  const getReservationById = await knex("reservation").where({
    id: req.params.id,
  });
  res.send(getReservationById);
});

//PUT api/reservations/{id}:

router.put("/:id", async function (req, res) {
  const updateReservationById = await knex("reservation")
    .where({ id: req.params.id })
    .update({ number_of_guests: req.query.number_of_guests });
  res.send(`Reservation with this:${updateReservationById} has been updated`);
});

//DELETE api/reservations/{id}:

router.delete("/:id", async function (req, res) {
  const deleteReservationById = await knex("reservation")
    .where({
      id: req.params.id,
    })
    .del();
  res.send(`Reservation with id ${deleteReservationById} was deleted`);
});

module.exports = router;
