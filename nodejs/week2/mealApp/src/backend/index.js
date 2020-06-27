const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => res.send("Hello World"));

const meals = require("./routes/meals.js");
app.get("/meals", meals);

const reservations = require("./routes/reservations.js");
app.get("/reservations", reservations);

const reservationsWithId = require("./routes/reservations.js");
app.get("/reservations/:id", reservationsWithId);

const getMealsWithId = require("./routes/meals.js");
app.get("/meals/:id", getMealsWithId);

const reviews = require("./routes/reviews.js");
app.get("/reviews", reviews);

const reviewsWithId = require("./routes/reviews.js");
app.get("/reviews/:id", reviewsWithId);

app.listen(port, () => console.log(`MealApp is listening on port ${port}`));
