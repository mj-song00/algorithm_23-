const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [a, b] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

if (a === 0 && b === 0) {
  console.log(`Not a moose`);
} else if (a === b) {
  console.log(`Even ${a + b}`);
} else if (a !== b) {
  const max = Math.max(a, b);
  console.log(`Odd ${max * 2}`);
}
