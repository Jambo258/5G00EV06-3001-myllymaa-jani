//const util = require("util");
var fs = require("fs");
//const readFileAndParse = util.promisify(fs.readFile);
var readlineSync = require("readline-sync");

function parseJson(data) {
  function func(resolve, reject) {
    // parse the data (do not implement try catch, if exception occurs, this
    // will be catched automatically in your catch outside of this function.
    // if name is found from obj, call resolve, otherwise call reject
    //resolve(data)

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

function readFile(fileName) {
  function func(resolve, reject) {
    fs.readFile(fileName, "utf-8", (err, data) => {
      if (err) {
        reject(`filename ${fileName} does not exist`);
      } else {
        resolve(data);
      }
    });
  }
  const p = new Promise(func);
  return p;
}

var fileName = readlineSync.question("Give file name:");

async function readFileAndParse(fileName) {
  const result = await readFile(fileName);
  const msg = await parseJson(result);
  return msg;
}

readFileAndParse(fileName)
  .then((name) => console.log(name))
  .catch((msg) => console.log(msg));
