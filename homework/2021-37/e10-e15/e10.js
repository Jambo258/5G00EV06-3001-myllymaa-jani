function Person(name) {
  this.name = name;
  this.sayHello = function () {
    console.log("hello from " + this.name);
  };
}
let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();

console.log(Object.getPrototypeOf(jack) === Person.prototype);
console.log(Object.getPrototypeOf(tina) === Person.prototype);
//palauttaa truen joten kyllä person on jackin ja tinan parent
// ei ole mahdollista kuin komennolla Object.setPrototypeOf
Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};
tina.drinkBeer();
jack.drinkBeer();
