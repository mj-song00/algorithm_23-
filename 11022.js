const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i < input.length; i++) {
  const score = input[i].split(" ");
  const answer = Number(score[0]) + Number(score[1]);
  console.log(`Case #${i}: ${score[0]} + ${score[1]} = ${answer}`);
}
