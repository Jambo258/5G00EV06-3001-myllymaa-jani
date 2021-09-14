let user = {
  firstName: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.firstName}!`);
  },
};
let myFunction = user.sayHello;
let myFunction1 = user.sayHello.bind(user);
myFunction();
myFunction1();
