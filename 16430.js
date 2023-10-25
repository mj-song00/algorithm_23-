const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [A, B] = input;
console.log(B - A, B);
