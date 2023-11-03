const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [R1, S] = input;
let R2 = "";

let _S = S * 2;

R2 = _S - R1;

console.log(R2);
