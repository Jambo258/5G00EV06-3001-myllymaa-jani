const util = require("util");
var fs = require("fs");
const readFile = util.promisify(fs.readFile);
var readlineSync = require("readline-sync");

function parseJson(data) {
  function func(resolve, reject) {
    // parse the data (do not implement try catch, if exception occurs, this
    // will be catched automatically in your catch outside of this function.
    // if name is found from obj, call resolve, otherwise call reject

    var obj = JSON.parse(data);
    if ("name" in obj) {
      resolve(obj.name);
    } else {
      reject("property name not found");
    }
  }
  const p = new Promise(func);
  return p;
}
/*
readFile(filename, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
*/

var fileName = readlineSync.question("Give file name:");

//readFile(fileName, "utf-8").then((data) => console.log(data));

readFile(fileName, "utf-8")
  .then(parseJson)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
