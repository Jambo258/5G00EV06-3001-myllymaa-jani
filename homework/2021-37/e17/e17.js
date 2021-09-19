/*
class Person {
  constructor(name) {
    this.name = name;
    this.hello = function () {
      this.hello = this.hello.bind(this);
      console.log(`hello ${this.name}`);
    };
  }

  delayedHello() {
    setTimeout(this.hello, 1000);
  }
}
let jack = new Person("jack");
jack.hello();
jack.delayedHello();
*/

class Person {
  constructor(name) {
    this.name = name;
    this.hello = () => {
      console.log(`hello ${this.name}`);
    };
  }

  delayedHello() {
    setTimeout(this.hello, 1000);
  }
}
let jack = new Person("jack");
jack.hello();
jack.delayedHello();
