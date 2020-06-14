const canvas = document.querySelector("#canvas");

// #What if we wanted the canvas to have the same width and height of the screen?:
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const contxt = canvas.getContext("2d");

// # Paint a circle to a canvas element:

contxt.arc(100, 90, 30, 0, 360);
contxt.strokeStyle = "orange";
contxt.stroke();
contxt.fillStyle = "yellow";
contxt.fill();

// # Class creation time!:

class Circle {
  constructor(x, y, r, startAngle, endAngle, fillColor) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.startAngle = startAngle;
    this.endAngle = endAngle;
    this.fillColor = fillColor;
  }
  draw(contxt) {
    contxt.beginPath();
    contxt.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
    contxt.strokeStyle = "darkgreen";
    contxt.stroke();
    contxt.fillStyle = this.fillColor;
    contxt.fill();
  }
}
const circle1 = new Circle(100, 200, 30, 0, 360 * Math.PI, "purple");
circle1.draw(contxt);
const circle2 = new Circle(500, 400, 30, 0, 360 * Math.PI, "orange");
circle2.draw(contxt);
const circle3 = new Circle(40, 350, 30, 0, 360 * Math.PI, "red");
circle3.draw(contxt);
const circle4 = new Circle(250, 180, 30, 0, 360 * Math.PI, "blue");
circle4.draw(contxt);
const circle5 = new Circle(200, 390, 30, 0, 360 * Math.PI, "pink");
circle5.draw(contxt);

// # Now lets make art!:

function getRandomColor(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let arrayofColors = [
  "#FF6633",
  "#FFB399",
  "#FF33FF",
  "#FFFF99",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#E6B3B3",
  "#6680B3",
  "#66991A",
  "#FF99E6",
  "#CCFF1A",
  "#FF1A66",
  "#E6331A",
  "#33FFCC",
  "#66994D",
  "#B366CC",
  "#4D8000",
  "#B33300",
  "#CC80CC",
  "#66664D",
  "#991AFF",
  "#E666FF",
  "#4DB3FF",
  "#1AB399",
  "#E666B3",
  "#33991A",
  "#CC9999",
  "#B3B31A",
  "#00E680",
  "#4D8066",
  "#809980",
  "#E6FF80",
  "#1AFF33",
  "#999933",
  "#FF3380",
  "#CCCC00",
  "#66E64D",
  "#4D80CC",
  "#9900B3",
  "#E64D66",
  "#4DB380",
  "#FF4D4D",
  "#99E6E6",
  "#6666FF",
  "#000000",
  "#FFFAFA",
  "#F5F5F5",
];
const getInterval = setInterval(() => {
  const circle = new Circle(
    getRandomColor(1300),
    getRandomColor(1500),
    getRandomColor(40),
    20,
    60,
    arrayofColors[getRandomColor(85)]
  );
  circle.draw(contxt);
}, 100);

setTimeout(() => {
  clearInterval(getInterval);
}, 10000);

// # Follow the mouse - optional:

canvas.addEventListener("mousemove", (e) => {
  const circle = new Circle(
    e.clientX,
    e.clientY,
    40,
    20,
    60,
    arrayofColors[getRandomColor(100)]
  );
  circle.draw(contxt);
});
