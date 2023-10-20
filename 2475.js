const input = require("fs")
  .readFileSync("2475.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let number = 0;
for (i of input) {
  number += i ** 2;
}

console.log(number % 10);
