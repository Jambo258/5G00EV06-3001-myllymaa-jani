import { max, min } from "./modules/utility.js";
import cmdline from "./modules/commandlinearguments.js";
cmdline();

let myarray = [1, 2, 3, 4];
console.log(max(myarray)); // 4
console.log(min(myarray)); // 1
