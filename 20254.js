const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [U, T, O, R] = input;

console.log(56 * U + 24 * T + 14 * O + 6 * R);
