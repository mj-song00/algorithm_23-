const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input[0];

let answer = 0;
input.slice(1).forEach((e) => {
  answer += e;
});
answer = answer - (N - 1);
console.log(answer);
