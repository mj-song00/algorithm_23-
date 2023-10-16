const input = require("fs")
  .readFileSync("10951.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const score = input[i].split(" ");
  const answer = Number(score[0]) + Number(score[1]);
  console.log(answer);
}
