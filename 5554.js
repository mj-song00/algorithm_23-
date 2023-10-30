const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => Number(x));

let sum = 0;
for (let nums of input) {
  sum += nums;
}
const x = Math.floor(sum / 60);
const y = sum - x * 60;

console.log(x);
console.log(y);
