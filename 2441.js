const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString();

for (let i = input; i > 0; i--) {
  console.log(" ".repeat(input - i) + "*".repeat(i));
}
