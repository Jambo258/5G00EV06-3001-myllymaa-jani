function Person(fname, lname) {
  //this.fname = fname;
  //this.lname = lname;
  if (this instanceof Person == true) {
    this.fname = fname;
    this.lname = lname;
  } else {
    throw new TypeError("Cannot call a class as a function");
  }
  //console.log(this instanceof Person);
}

const jaska = new Person("Jaska", "Jokunen");
const matti = new Person("Matti", "Nieminen");
const jonna = new Person("Jonna", "Virtanen");
var obj = Person("jack", "smith");

console.log(jaska.fname, jaska.lname);
console.log(matti.fname, matti.lname);
console.log(jonna.fname, jonna.lname);
console.log(fname, lname);
