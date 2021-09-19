function Person(name) {
  this.name = name;
}
Person.prototype.drinkBeer = function () {
  console.log(this.name + " drinks beer");
};

let jack = new Person("jack");
jack.drinkBeer();
let tina = new Person("tina");
tina.drinkBeer();

Object.setPrototypeOf(Programmer.prototype, Person.prototype);
// hannah ei voi juoda olutta ennenkuin programmer liitetään isäntään personiin
function Programmer(name, salary) {
  Person.call(this, name);
  this.salary = salary;
}
Programmer.prototype.codeApps = function () {
  console.log(this.name + " implements apps");
};
let hannah = new Programmer("hannah", 4000);
hannah.codeApps();

hannah.drinkBeer();
