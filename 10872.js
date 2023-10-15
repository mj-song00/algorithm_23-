const input = require("fs")
  .readFileSync("10872.txt")
  .toString()
  .trim()
  .split(" ");

function answer(n) {
  return n > 0 ? n * answer(n - 1) : 1;
}

console.log(answer(input));
