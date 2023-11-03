const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

for (let i = 1; i <= input[0]; i++) {
  console.log(`${i}. ${input[i]}`);
}
