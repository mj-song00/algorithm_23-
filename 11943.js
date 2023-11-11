const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let [a, b] = input;
a = a.split(" ").map(Number);
b = b.split(" ").map(Number);

console.log(Math.min(a[0] + b[1], a[1] + b[0]));
