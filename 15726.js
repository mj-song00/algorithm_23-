const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, c] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.floor(Math.max((a * b) / c, (a / b) * c)));
