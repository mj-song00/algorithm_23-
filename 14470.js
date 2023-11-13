const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [a, b, c, d, e] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// if (a < 0) {
//   console.log(Math.abs(a * c) + d + e * b);
// } else {
//   console.log((b - a) * e);
// }

console.log(a < 0 ? Math.abs(a * c) + d + e * b : (b - a) * e);
