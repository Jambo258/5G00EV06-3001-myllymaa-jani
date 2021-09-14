var fs = require("fs");
/*
fs.readFile(process.argv[2], "utf-8", function (err, data) {
  if (err) {
    throw err;
  } else {
    fs.writeFile(process.argv[3], data, () => console.log("onnistui"));


  }

});
*/
function copy(a, b) {
  fs.readFile(a, "utf-8", function (err, data) {
    if (err) {
      console.log("error");
    } else {
      fs.writeFile(b, data, () => console.log("Success"));
    }
  });
}

let result = copy("original.txt", "copy2.txt");
console.log(result);
