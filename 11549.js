const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const ranks = input[1].split(" ");
const tea = input[0];

// for (i of input) {
//   console.log();
// }

let count = 0;
for (let i = 0; i < 5; i++) {
  if (ranks[i] === tea) count += 1;
}
console.log(count);
