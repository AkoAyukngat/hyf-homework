const express = require("express");
const app = express.Router();
const reservations = require("../data/reservations");

//json for all reservations:
app.get("/", (req, res) => {
  res.send(reservations);
});

//json for reservations corresponding with ID:
app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const reservationsWithId = reservations.filter(
    (reservation) => reservation.id === id
  );
  res.send(reservationsWithId);
});

module.exports = app;
