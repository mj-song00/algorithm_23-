let [X, Y] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solution(X, Y) {
  let a = X - 1;
  let b = Y - 1;

  let answer = 0;

  answer += Math.ceil(Math.abs(a / 4 - b / 4));
  answer += Math.ceil(Math.abs((a % 4) - (b % 4)));
  return answer;
}

console.log(solution(X, Y));
