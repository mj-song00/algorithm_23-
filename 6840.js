const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

const a = Math.floor(input.length / 2);

console.log(input[a]);
