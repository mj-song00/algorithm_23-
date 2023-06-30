const input = require("fs")
  .readFileSync("2420.txt")
  .toString()
  .trim()
  .split(" ");

const [min, max] = input;

console.log(Math.abs(max - min));
