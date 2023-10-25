const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [n1, n2, n12] = input;

console.log(Math.floor(((n1 + 1) * (n2 + 1)) / (n12 + 1) - 1));
