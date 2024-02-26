const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// for (let i = 1; i <= input[0]; i++) {
//   // 각 줄의 문자열을 가져옵니다.
//   const answer = input[i].split("");
//   let count = 0; // 연속된 U의 갯수
//   let max = 0; //

//   for (let j = 0; j < answer.length; j++) {
//     if (answer[j] === "U") {
//       // 'U'가 나타나면 연속 'U'의 개수를 증가시킵니다.
//       count++;
//       // 최대 연속 'U'의 개수를 갱신합니다.
//     } else {
//       // 'U'가 아닌 문자가 나타나면 연속 'U'의 개수를 리셋합니다.
//       max = Math.max(max, count);
//       count = 0;
//     }
//   }
//   console.log(count);
// }

const T = parseInt(input[0]);
let currentIndex = 1;

for (let testCase = 0; testCase < T; testCase++) {
  const steps = input[currentIndex++];

  let count = 0; // Adam이 걸은 총 걸음 수
  let isFalling = false; // Adam이 넘어졌는지 여부

  for (let i = 0; i < steps.length; i++) {
    if (steps[i] === "U") {
      count++;
    } else if (steps[i] === "D") {
      // 만약 넘어졌다면 현재 걸음 수를 출력하고 루프를 종료합니다.
      if (!isFalling) {
        console.log(count);
        isFalling = true;
      }
    }
  }

  // 만약 Adam이 넘어지지 않고 끝까지 걸었다면 전체 걸음 수를 출력합니다.
  if (!isFalling) {
    console.log(count);
  }
}
