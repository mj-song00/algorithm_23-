const [A, B] = require("fs")
  .readFileSync("2558.txt")
  .toString()
  .split("\n")
  .map(Number);

console.log(A + B);
