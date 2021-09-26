import { readFile } from "fs";
import readlineSync from "readline-sync";

var filename = readlineSync.question("Give file name: ");

readFile(filename, "utf-8", (err, data) => {
  if (err) {
    console.log("file", filename, "does not exist.");
  } else {
    try {
      const obj = JSON.parse(data);
      if ("name" in obj) {
        console.log("The content of the file is:");
        console.log(obj.name);
      } else {
        console.log(`file ${filename} does contain json but not property name`);
      }
    } catch (err) {
      console.log(`file ${filename} does not contain json`);
    }
  }
});
