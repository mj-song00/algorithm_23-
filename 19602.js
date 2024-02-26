const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [s, m, l] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
console.log(s * 1 + m * 2 + l * 3 >= 10 ? "happy" : "sad");
