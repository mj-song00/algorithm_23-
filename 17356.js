const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const m = (b - a) / 400;

console.log(1 / (1 + Math.pow(10, m)));
