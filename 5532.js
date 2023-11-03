const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [L, A, B, C, D] = input;

const math = Math.ceil(B / D);
const mother = Math.ceil(A / C);

console.log(L - Math.max(math, mother));
