class Circle {
  constructor(radius) {
    if (radius < 0) {
      throw "Virhe! radius täytyy olla suurempi kuin 0";
    } else {
      this._radius = radius;
    }
  }
  set radius(newradius) {
    if (newradius < 0) {
      throw "Virhe! radius täytyy olla suurempi kuin 0";
    } else {
      this._radius = newradius;
    }
  }
  get radius() {
    return this._radius;
  }
  static max(radius) {
    let y = radius;
    var maxi = Math.max.apply(
      Math,
      y.map(function (o) {
        return o._radius;
      })
    );

    return maxi;
  }
}

let a = new Circle(10);
let b = new Circle(900);
let d = new Circle(1100);
let c = new Circle(150); // sets radius

c.radius = 30; // changes radius, uses setter
//console.log(c.radius);
//console.log(c.radius); // returns radius, uses getter
c.radius = 70; // crashes app, radius must be > 0

let x = Circle.max([a, b, c, d]);

console.log(x);
