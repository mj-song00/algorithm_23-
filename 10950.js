const input = require("fs")
  .readFileSync("10950.txt")
  .toString()
  .trim()
  .split("\n");
//  .map(Number);

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let score = input[i].split(" ");
  console.log(Number(score[0]) + Number(score[1]));
}
