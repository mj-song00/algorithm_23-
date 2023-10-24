const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

console.log((input[0] + input[1]).toString());
