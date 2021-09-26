import { readFile } from "fs";
import readlineSync from "readline-sync";

var filename = readlineSync.question("Give file name: ");
console.log("The content of the file is:");

readFile(filename, "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
