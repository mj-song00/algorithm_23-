const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, h, v] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const v1 = n - v;
const h1 = n - h;

const q1 = v1 * h * 4;
const q2 = v * h * 4;
const q3 = v * h1 * 4;
const q4 = v1 * h1 * 4;

console.log(Math.max(q1, q2, q3, q4));
