let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    //let f = this.sayHello
    var a = this.sayHello.bind(user);
    setTimeout(a, 1000);
  },
};
user.sayDelayedHello();
