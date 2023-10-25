const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const tax1 = input * 0.78;

const rewords = input * 0.8;
const case2 = input * 0.2;

const tax2 = case2 - input * 0.2 * 0.22 + rewords;
console.log(tax1, tax2);
