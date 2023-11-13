const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, c, d] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

const team1 =
  Math.max((Math.max(a, b), Math.max(c, d))) +
  Math.min(Math.min(a, b), Math.min(c, d));

const team2 =
  Math.max((Math.min(a, b), Math.min(c, d))) +
  Math.min(Math.max(a, b), Math.max(c, d));

console.log(Math.abs(team1 - team2));
