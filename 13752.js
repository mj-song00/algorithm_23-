const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, ...arr] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let answer = [];

for (let i of arr) {
  answer.push("=".repeat(i));
}
console.log(answer.join("\n"));

// for (let i = 1; i <= n; i++) {
//   console.log("=".repeat(input[i]));
// }
