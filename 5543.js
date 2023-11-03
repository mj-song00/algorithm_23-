const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [one, two, three, coke, cider] = input;

console.log(Math.min(one, two, three) + Math.min(coke, cider) - 50);
