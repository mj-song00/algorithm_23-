const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [S, T, D] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

const time = D / (S * 2);

console.log(time * T);
