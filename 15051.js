const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 각 층의 사람 수
const A1 = input[0];
const A2 = input[1];
const A3 = input[2];

// 각 층에 설치할 경우의 이동 시간 계산
const time1 = A2 * 2 + A3 * 4;
const time2 = A1 * 2 + A3 * 2;
const time3 = A1 * 4 + A2 * 2;

console.log(Math.min(time1, time2, time3));
