const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map((x) => Number(x));

const difference = input[1] - input[0];

console.log(input[1] + difference);
