const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input.filter((el, index) => input.indexOf(el) === index);
console.log(...arr.sort());
