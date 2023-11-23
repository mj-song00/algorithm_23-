const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const a = Number(input[0]) * 3 + Number(input[1]) * 2 + Number(input[2]);
const b = Number(input[3]) * 3 + Number(input[4]) * 2 + Number(input[5]);

if (a > b) {
  console.log("A");
} else if (a < b) {
  console.log("B");
} else {
  console.log("T");
}
