//case 1

function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    let somevariable = this;
    //setInterval(this.tick, 1000);

    setInterval(function () {
      //this.tick();
      somevariable.tick();
    }, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}

//case 2
/*
function Clock() {
  this.time = new Date().toString();
  this.startInterval = function () {
    //let somevariable = this;
    //setInterval(this.tick, 1000);

    setInterval(() => {
      //this.tick();
      //somevariable.tick();
      this.tick();
    }, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
}
*/
//case 3
/*
function Clock() {
  this.time = new Date().toString();

  this.startInterval = function () {
    setInterval(this.tick, 1000);

    setInterval(function () {}, 1000);
  };
  this.tick = function () {
    this.time = new Date().toString();
    console.log(this.render());
  };
  this.render = function () {
    return this.time;
  };
  this.tick = this.tick.bind(this);
}
*/
let clock = new Clock();
console.log(clock.render()); // outputs time
clock.startInterval(); // outputs time for every second, uses render
