var readlineSync = require("readline-sync");
//e08
console.log(process.argv[2]);
//e09
let luku1 = Number(process.argv[2]);
let luku2 = Number(process.argv[3]);
console.log(luku1 + luku2);

//e03
var username = readlineSync.question("What is your name? ");
console.log("Hello " + username + "!");
//e04
var number = readlineSync.questionInt("Give me a number ");
for (let i = 0; i < number; i++) {
  console.log(username);
}
//e05
let x = "hello";
let y = Number(x); // NaN
let z = String(y); // NaN
console.log(x, y, z);
console.log(z.repeat(16));
console.log("batman");

//e06
var a = 3;

{
  let b = 5;
  console.log(b);
  console.log(a);
  //näkyvyys vaan lohkon sisällä letillä, var tulostuu lohkonkin sisällä
}
//console.log(b); // b ei tulostu oikein koska lohkon ulkopuolella

//const c = 1;
//c = 3;
// tulee error koska yritetään muuttaa const muuttujaa

//e07
let xx = "hel'lo";
let yy = 'hel"lo';
let zz = `hel'"
            lo`;
//eri hipsujen avulla voidaan tulostaa usealle riville suoraa tai käyttää ' "" merkkejä sanojen keskellä

console.log(zz, xx, yy);

//e10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
//e11
const cars = ["Opel", "BMW", "Audi"];

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (const value of cars) {
  console.log(value);
}
//e12
var stringi = readlineSync.question("Give some string: ");
var stringii = stringi;

const arr = stringi.split("").reverse().join("");
//splitataan stringi osiin esim saippuakauppias = s,a,i,p,p,u,a,k,a,u,p,p,i,a,s käännetään
// jonka jälkeen yhdistetään taas stringiksi
if (arr == stringii) {
  console.log("Palindromi");
} else {
  console.log("Ei ole palindromi");
}
//e13
// käytetään valmista math kirjaston funktiota, joka palauttaa absoluuttisen arvon
function abs(muuttuja) {
  return Math.abs(muuttuja);
}
console.log(abs(-7));
console.log(abs(7));
