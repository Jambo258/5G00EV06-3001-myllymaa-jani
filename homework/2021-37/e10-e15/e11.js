/*
class Person {
  constructor(name) {
    this.name = name;
  }
  drinkBeer() {
    console.log(this.name + " drinks beer");
  }


  sayHello() {
    console.log("hello from " + this.name);
  }
}
//drinkbeer ja sayhello on kerran muistissa
let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();


Person.prototype.sayHello();
Person.prototype.drinkBeer();
// person prototyyppi sisältää nämä koska ne on classissa määritelty mutta tulee undefined koska ei tiedetä mihin person viittaa
*/

class Person {
  constructor(name) {
    this.name = name;
    this.drinkBeer = function () {
      console.log(this.name + " drinks beer");
    };
  }
  sayHello() {
    console.log("hello from " + this.name);
  }
}

let jack = new Person("jack");
jack.sayHello();
let tina = new Person("tina");
tina.sayHello();
//drinkbeer on nyt kahteen kertaan muistissa koska se on konstruktorissa
