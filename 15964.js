const input = require("fs")
  .readFileSync("15964.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [a, b] = input;

function answer(n, m) {
  return (n + m) * (n - m);
}

console.log(answer(a, b));
