const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// let [A, B, C] = input[0].split(" ").map(Number);
// const D = input[1];
// console.log(A, B, C);

// function timer() {
//   const minute = Math.floor(D / 60);
//   const second = Math.floor(D % 60);

//   C = parseInt(C) + second;
//   if (C >= 60) C = 0 + (C - 60) B = parseInt(B) + 1;

//   return C;
// }

// console.log(timer());

const [currentHour, currentMinute, currentSecond] = input[0]
  .split(" ")
  .map(Number);
const cookingTime = parseInt(input[1]);

const secondsToTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600); //시간을 초로 계산
  const minutes = Math.floor((totalSeconds % 3600) / 60); //총 초 수를 시간으로 나눈 나머지를 60으로 나누어서 분을 계산
  const seconds = totalSeconds % 60;
  return [hours, minutes, seconds];
};

const totalSeconds =
  currentHour * 3600 + currentMinute * 60 + currentSecond + cookingTime;
const newTime = secondsToTime(totalSeconds % 86400); // 86400는 하루의 초 수

console.log(newTime.join(" "));
