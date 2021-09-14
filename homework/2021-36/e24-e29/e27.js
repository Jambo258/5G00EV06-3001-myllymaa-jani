let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};
/*
function sayHello() {
  user.sayHello();
}
*/
//user.sayHello();

//setTimeout(user.sayHello, 1000);
// hello undefined tulee sen takia, koska settimeout funktioon tulee user.sayhello parametrina settimeout();

//setTimeout(sayHello,1000);
// funktiossa sayhello kutsu tapahtuu olion kautta joten se toimii ja käytetään apu funktiota sayhello
let f = user.sayHello;
f();

setTimeout(() => user.sayHello(), 1000);
user.sayHello = function () {
  console.log("does it work?");
};
//user.sayHello sisältö korvaantuu uudella sisällöllä koska user.sayhello määritellään uudestaan ja tulostus
// tapahtuu sisällön muutoksen jälkeen
