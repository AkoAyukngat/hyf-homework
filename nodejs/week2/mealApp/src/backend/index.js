const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello World"));

const meals = require("./routes/meals.js");
app.use("/meals", meals);

const reservations = require("./routes/reservations.js");
app.use("/reservations", reservations);

const reviews = require("./routes/reviews.js");
app.use("/reviews", reviews);

app.listen(port, () => console.log(`MealApp is listening on port ${port}`));
