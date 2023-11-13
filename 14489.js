const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const a = parseInt(input[0].split(" ")[0]);
const b = parseInt(input[0].split(" ")[1]);
const c = parseInt(input[1]);

console.log(a + b > 2 * c ? a + b - c * 2 : a + b);
