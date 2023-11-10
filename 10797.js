const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let count = 0;

const num = input[0] * 1;

const nums = input[1].split(" ").map(Number);

// for (let i = 0; i <= nums.length; i++) {
//   if (num === nums[i]) count++;
// }

for (i of nums) {
  if (i === num) count++;
}
console.log(count);
