const input = require("fs")
  .readFileSync("10950.txt")
  .toString()
  .trim()
  .split("\n");

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  console.log(input[i].split(" "));
  let score = input[i].split(" ");
  console.log(Number(score[0]) + Number(score[1]));
}
