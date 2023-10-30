const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((el) => el.split(" ").map((x) => Number(x)));

const [L, P] = input[0];

let count = L * P;
let result = [];

for (let i = 0; i < input[1].length; i++) {
  result.push(input[1][i] - count);
}

console.log(result.join(" "));
