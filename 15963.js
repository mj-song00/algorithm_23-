const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

console.log(input[0] === input[1] ? 1 : 0);
