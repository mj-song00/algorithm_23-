const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString();

for (let i = 1, j = 0; i <= input; i++) {
  console.log("!".repeat(input - i) + "*".repeat(i + j)); // 공백을 input - i 값까지 반복 + *을 i+j값까지 반복
  j = j + 1;
}
