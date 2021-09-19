let obj = { name: "jussi" };

function Dog(name) {
  this.name = name;
  //this.sniffButt = function () {
  //  console.log("hello world");
  //};
  // sniffbutt proto korvaantuu tällä
  //this.sniffButt = this.sniffButt.bind(obj)
  //this.sniffbuttiin bindataan obj muuttujaan joten jussista tulee globaali
  this.sniffButt = this.sniffButt.bind(this);
  //this viittaa nimeen johon kyseinen bind tehdään
}
Dog.prototype.sniffButt = function () {
  console.log(this.name + " sniffs butt");
};
//sniffbutt on muistissa yhden kerran
let spot = new Dog("spot");
let vilma = new Dog("vilma");
spot.sniffButt();
vilma.sniffButt();

Dog.prototype.delayedSniffButt = function () {
  setTimeout(this.sniffButt, 1000);
};

spot.delayedSniffButt();
vilma.delayedSniffButt();
// tulee undefined koska settimeouttiin tulee funkio kutsuna eikä olion kautta settimeout ();
