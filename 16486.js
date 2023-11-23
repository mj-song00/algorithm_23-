const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [d1, d2] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const r = 3.141592;

console.log(2 * r * d2 + d1 * 2);
