let user = {
  name: "Jack",
  sayHello: function () {
    console.log(`Hello, ${this.name}!`);
  },
};

user.sayHello();

let myfunc = user.sayHello;
myfunc();
//tulostuu hello,undefined koska funkiota kutsutaan suoraa eikä olion kautta kuten yllä user.sayhello()
