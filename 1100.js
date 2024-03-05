let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

let count = 0;
for (let i = 0; i < 8; i++) {
  // i가 0부터 8보다 작을때까지

  for (let j = 0; j < 8; j++) {
    // j가 0부터 8보다 작을때까지
    if ((i + j) % 2 === 0 && input[i][j] === "F") count++; //i+j값이 2로 나눈 나머지가 0이고, 체스칸의 [i][j]가 F일 경우 count 증가
  }
}
console.log(count);
