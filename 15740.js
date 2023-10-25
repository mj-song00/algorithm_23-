const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const answer = BigInt(input[0]) + BigInt(input[1]);
console.log(answer.toString());
