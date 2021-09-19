var f = require("./mymodule");
f.printName();

let s = f.sum(5, 5); // 10

var { printName, sum } = require("./mymodule");

printName();
let a = sum(5, 5);

/*
let olio = {
   name: 'tiina',
   age: 40
}

// Create two new variables and set values to be 'tiina' and 40
let { name, age } = olio
console.log(name) // tiina
console.log(age) // 40
*/
