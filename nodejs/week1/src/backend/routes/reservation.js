const express = require("express");
const app = express.Router();
const reservation = require("../data/reservations");

//json for a random reservation
app.get("/reservation", (req, res) => {
  const randomReservation =
    reservation[Math.floor(Math.random() * reservation.length)];
  res.send(randomReservation);
});

module.exports = app;
