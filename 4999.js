const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const patient = input[0].length;
const doctor = input[1].length;

const answer = patient >= doctor ? "go" : "no";

console.log(answer);
