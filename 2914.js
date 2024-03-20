const [A, I] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

const melody = A * (I - 1) + 1;
console.log(melody);
