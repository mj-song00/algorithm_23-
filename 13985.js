const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, c, d, e] = require("fs")
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number);

console.log(a + c === e ? "YES" : "NO");
