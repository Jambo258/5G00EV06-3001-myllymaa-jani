//function doIt() {
//  console.log(this);
//}
//doIt();

//samat tulostukset doiT() ja x()
//let x = doIt;
//x();

function doIt() {
  console.log(this);
}
var obj = { key: "value" };

// Create a copy of the doIt() function so that
// the keyword thisis replaced with obj
let x = doIt.bind(obj);
x();
