const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let [sum, diff] = input;

let A = 0;
let B = 0;

A = (sum + diff) / 2;
B = sum - A;

if (A < 0 || B < 0 || A % 1 !== 0 || B % 1 !== 0) {
  console.log(-1);
} else {
  console.log(A, B);
}
