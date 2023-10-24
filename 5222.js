const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = input.reduce((acc, cur) => acc + cur, 0);

console.log(answer);
