const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

const [A, B] = input;
let answer = 0;

for (let i = 0; i < A.length; i++) {
  for (let j = 0; j < B.length; j++) {
    answer += parseInt(A[i]) * parseInt(B[j]);
  }
}

console.log(answer);
//시간초과 ㅠ ㅠ
