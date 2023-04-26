const input = require("fs").readFileSync("11653.txt").toString().trim();

let N = input * 1;
let answer = [];

for (let i = 2; i <= N; i++) {
  while (N % i === 0) {
    N /= i;
    answer.push(i);
  }
  if (N === 1) break;
}

answer.forEach((number) => console.log(number));
