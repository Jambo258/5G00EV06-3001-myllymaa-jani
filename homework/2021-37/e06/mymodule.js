
//module.exports = printName


function printName(){
    console.log("Jaska Jokunen");
}

function sum(a,b){
    console.log(a+b);
}
let obj = { 'printName':printName,'sum': sum };
module.exports = obj

