class Shape {
  #_color;
  #_id;
  constructor(color = "BLACK", id = 1) {
    this.#_color = color;
    this.#_id = id;
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
}

class Square extends Shape {
  #_side;
  constructor(color, side) {
    super(color, 1); //calling parent constructor
    this.#_side = side;
  }

  area() {
    return this.side * this.side;
  }
}

class Circle extends Shape {
  #_radius;
  constructor(color, radius) {
    super(color, 2); //calling parent constructor
    this.#_radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }
}

let sq = new Square("RED", 4);
console.log(sq.color);
console.log(sq.id);
let circle = new Circle("RED", 5);
console.log(circle.color);
console.log(circle.id);


//Multi Leve inheritance.
class A {}
class B extends A {}
class C extends B {}

class Triangle extends Shape {}
class EquvilaterTriangle extends Triangle {}
class IsosolesTriangle extends Triangle {}