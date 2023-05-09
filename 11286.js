const input = require("fs")
  .readFileSync("11286.txt")
  .toString()
  .trim()
  .split("\n");

const arr = [];
const answer = [];

for (let i = 1; i < input.length; i++) {
  arr.push(input[i]);
  if (Math.abs(input[i]) === 0) arr.pop(Math.min(input[i]));
  answer.push(arr.pop(Math.min(input[i])));
}
console.log(arr);
console.log(answer);
