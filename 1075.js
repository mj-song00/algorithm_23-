let input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

solution(input[0], input[1]);

function solution(n, f) {
  let answer = 0;
  let num = ((n / 100) | 0) * 100;

  while (true) {
    if (num % f == 0) {
      answer = num;
      break;
    } else {
      num++;
    }
  }
  console.log(("" + answer).slice(-2));
}
//작은수는 출력되지만, N이 커질수록 출력이 안됨
//시간초과
