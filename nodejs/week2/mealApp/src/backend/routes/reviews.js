const express = require("express");
const app = express.Router();
const reviews = require("../data/reviews");

//json for all reviews:
app.get("/", (req, res) => {
  res.send(reviews);
});

//json for the review with the corresponding ID:
app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const getReviewsId = reviews.filter((review) => review.id === id);
  res.send(getReviewsId);
});

module.exports = app;
