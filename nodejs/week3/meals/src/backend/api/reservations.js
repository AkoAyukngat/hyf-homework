const express = require("express");
const router = express.Router();
const knex = require("../database");

//GET api/reservations/:

router.get("/", async function (req, res) {
  const reservations = await knex.select("*").table("reservation");
  res.json(reservations);
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
  res.json("New reservation added");
});

//GET api/reservations/{id}:

router.get("/:id", async function (req, res) {
  const getReservationById = await knex("reservation").where({
    id: req.params.id,
  });
  res.json(getReservationById);
});

//PUT api/reservations/{id}:

router.put("/:id", async function (req, res) {
  const updateReservationById = await knex("reservation")
    .where({ id: req.params.id })
    .update({ number_of_guests: req.query.number_of_guests });
  res.json(`Reservation with this:${updateReservationById} has been updated`);
});

//DELETE api/reservations/{id}:

router.delete("/:id", async function (req, res) {
  const deleteReservationById = await knex("reservation")
    .where({
      id: req.params.id,
    })
    .delete();
  res.json(`Reservation with id ${deleteReservationById} was deleted`);
});

module.exports = router;
