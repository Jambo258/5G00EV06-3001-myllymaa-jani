/*
function Dog(name) {
  this.name = name;
  this.sniffButt = this.sniffButt.bind(this);

}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};

spot.delayedSniffButt();
vilma.delayedSniffButt();
*/
class Dog {
  constructor(name) {
    this.name = name;

    this.delayedSniffButt = function () {
      var x = this.sniffButt.bind(this);
      setTimeout(x, 1000);
    };
    this.sniffButt = function () {
      console.log(this.name + " sniffs butt");
    };
  }
}

let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();
spot.delayedSniffButt();
vilma.delayedSniffButt();
