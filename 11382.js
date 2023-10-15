const numbers = require("fs")
  .readFileSync("11382.txt")
  .toString()
  .trim()
  .split(" ");

const [A, B, C] = numbers;

console.log(A * 1 + B * 1 + C * 1);
