const express = require('express');
const app = express.Router();
const reservations = require("../data/reservations");

//json for all reservations
app.get('/reservations', (req, res) => {
  res.send(reservations);
});

module.exports = app;