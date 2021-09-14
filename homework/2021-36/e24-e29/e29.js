let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    //let f = this.sayHello;
    //let f = user.sayHello
    //setTimeout(f, 1000);
    //setTimeout(this.sayHello,1000)
    setTimeout(helper, 1000);
  },
};
function helper() {
  user.sayHello();
}
user.sayHello();
user.sayDelayedHello();

//helper funktion avulla saadaan settimeouttiin olion kautta tapahtuva kutsu eikä funktion kautta
// setTimeout(user.sayhello(),1000);
