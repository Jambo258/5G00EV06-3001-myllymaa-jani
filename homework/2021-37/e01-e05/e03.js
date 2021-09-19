/*
setTimeout(function() {
  console.log('hello')
})

// OR

setTimeout(() => {
  console.log('hello')
})
*/

let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    setTimeout(() => {
      this.sayHello();
    }, 1000);
    // setTimeout(function() {
    //   this.sayHello()
    // }, 1000)
  },
};
user.sayDelayedHello();
//this on menetetty koska se ei viittaa mihinkään
//arrow funkiolla se viittaa ylemmän tason arvoihin, joten se toimii

//babel käännös
/*
var user = {
  name: "Jack",
  sayHello: function sayHello() {
    console.log("Hello, ".concat(this.name, "!"));
  },
  sayDelayedHello: function sayDelayedHello() {
    var _this = this;

    setTimeout(function () {
      _this.sayHello();
    }, 1000);
  }
};
user.sayDelayedHello();
*/
// _this = this tehdään automaattisesti arrow syntaksilla, jolloin this viittaa nimeen
