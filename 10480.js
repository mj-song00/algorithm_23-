const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const nums = input[0];

for (const num of input.slice(1, nums + 1)) {
  console.log(num % 2 === 0 ? `${num} is even` : `${num} is odd`);
}
