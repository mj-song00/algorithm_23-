const input = require("fs")
  .readFileSync("27866.txt")
  .toString()
  .trim()
  .split("\n");

const [S, i] = input;

console.log(S[i - 1]);
