class Square {
  #_color;
  #_id;
  side;
  constructor(color, side) {
    this.#_color = color;
    this.side = side;
    this.#_id = 1;
  }

  get color() {
    return this.#_color;
  }

  set color(value) {
    this.#_color = value;
  }

  get id() {
    return this.#_id;
  }

  area() {
    return this.side * this.side;
  }
}

class Circle {
  #_color;
  #_id;
  radius;
  constructor(color, radius) {
    this.color = color;
    this.radius = radius;
    this.#_id = 2;
  }

  get color() {
    return this.#_color;
  }

  set color(value) {
    this.#_color = value;
  }

  get id() {
    return this.#_id;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle {
  #_color;
  #_id;
  length;
  width;
  constructor(color, length, width) {
    this.#_color = color;
    this.length = length;
    this.width = width;
    this.#_id = 1;
  }

  get color() {
    return this.#_color;
  }

  set color(value) {
    this.#_color = value;
  }

  get id() {
    return this.#_id;
  }

  area() {
    return this.length * this.width;
  }
}

let sq = new Square("RED", 20);
console.log("Area of a square", sq.area());
let circle = new Circle("WHITE", 4);
console.log("Area of a circle", circle.area());
let rectangle = new Rectangle("YELLOW", 4, 6);
console.log("Area of a rectangle", rectangle.area());
