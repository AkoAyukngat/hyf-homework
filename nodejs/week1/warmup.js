class circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

const myCircle = new circle(10);
console.log(`Diameter:${myCircle.getDiameter().toFixed(2)}`);
console.log(`Circumference:${myCircle.getCircumference().toFixed(2)}`);
console.log(`Area:${myCircle.getArea().toFixed(2)}`);
