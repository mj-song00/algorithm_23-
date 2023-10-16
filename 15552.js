const input = require("fs")
  .readFileSync("15552.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);
let answer = "";

for (let i = 1; i <= num; i++) {
  const score = input[i].split(" ");
  answer += Number(score[0]) + Number(score[1]) + "\n";
}
console.log(answer);
