const input = require("fs")
  .readFileSync("2338.txt")
  .toString()
  .split("\n")
  .map(BigInt);

const [a, b] = input;

console.log(`${a + b}\n${a - b}\n${a * b}`);
