function Person(fname, lname) {
  this.fname = fname;
  this.lname = lname;
  console.log(this instanceof Person);
}

const jaska = new Person("Jaska", "Jokunen");
const matti = new Person("Matti", "Nieminen");
const jonna = new Person("Jonna", "Virtanen");
var obj = Person("jack", "smith");
// jos ei luoda newlla Personia, jack ja smith tallentuu globaaliksi muuttujaksi
console.log(jaska.fname, jaska.lname);
console.log(matti.fname, matti.lname);
console.log(jonna.fname, jonna.lname);
console.log(fname, lname);

// this instaceof Person palauttaa true tai falsen riippuen onko person luotu newlla vai ei
