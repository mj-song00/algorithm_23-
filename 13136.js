const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [R, C, N] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");
// const [R, C, N] = input;

// let n1 = 0;
// let n2 = 0;

// n1 = Math.ceil(R / N);
// n2 = Math.ceil(C / N);

console.log(Math.ceil(R / N) * Math.ceil(C / N));
