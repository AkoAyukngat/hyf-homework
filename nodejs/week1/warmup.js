class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.pow(this.radius, 2);
  }
  getDiameter() {
    return 2 * this.radius;
  }
  getCircumference() {
    //return 2 * Math.PI * this.radius;
    return Math.pow(this.radius, 2);
  }
}

const myCircle = new Circle(10);
console.log(`Diameter:${myCircle.getDiameter().toFixed(2)}`);
console.log(`Circumference:${myCircle.getCircumference().toFixed(2)}`);
console.log(`Area:${myCircle.getArea().toFixed(2)}`);
