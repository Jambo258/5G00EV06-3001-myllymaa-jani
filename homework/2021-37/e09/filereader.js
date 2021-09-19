var fs = require("fs");

function FileReader(path) {
  this.path = path;

  let Done = this;
  this.readAndOutput = function () {
    fs.readFile(this.path, "utf-8", function (err, data) {
      Done.done(err, data);
    });
    // starts to read this.path. When done, invoke the done
    // function that will output the result (or crash the app)
    // (result = this.path and data.)
  };

  this.done = function (err, data) {
    if (err) {
      throw err;
    } else {
      console.log(this.path, data);
    }
  };
}

module.exports = FileReader;
