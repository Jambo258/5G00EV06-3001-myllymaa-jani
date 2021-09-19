/*
let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function() {
    let variable = 10
    setTimeout(function() {
      console.log(variable)
    }, 1000)
  }
}
user.sayDelayedHello()
*/
/*
let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function() {
    console.log(this)
    setTimeout(function() {
      // console.log(this)
    }, 1000)
  }
}
user.sayDelayedHello()
*/
/*
let user = {
  name: "Jack",
  sayHello: function() {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function() {
    console.log(this)
    setTimeout(function() {
      console.log(this)
    }, 1000)
  }
}
user.sayDelayedHello()
*/

let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
  sayDelayedHello: function () {
    // THIS WORKS
    let thisworks = this;
    setTimeout(function () {
      // THIS DOES NOT WORK
      //console.log(thisworks)
      thisworks.sayHello();
      //thisworks viittaa user nameen ja kutsu on this.sayhello() joten output on hello jack
    }, 1000);
  },
};
user.sayDelayedHello();
