const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, M, K] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const O = Math.min(M, K);
const X = Math.min(N - M, N - K);

console.log(O + X);
