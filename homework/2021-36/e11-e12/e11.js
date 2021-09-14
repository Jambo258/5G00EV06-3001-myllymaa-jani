/*
var fs = require("fs");

fs.readFile(process.argv[2], "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

var fs = require("fs");

fs.readFile(process.argv[2], "utf-8", function (err, data) {
  if (err) {
    throw err;
  } else {
    fs.writeFile(process.argv[3], data, () => console.log("onnistui"));
  }
});
