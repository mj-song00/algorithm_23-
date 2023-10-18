const input = require("fs")
  .readFileSync("2738.txt")
  .toString()
  .trim() //라인 공백 제거
  .split("\n") // 라인 분할
  .map(
    (x) =>
      x
        .trim() // 라인 앞뒤 공백 제거
        .split(" ") //공백 문자(" ")를 기준으로 분할하여 문자열 배열을 생성
        .map((x) => +x) // 숫자로 변경
  );

// [
//   [3, 3],  3x3행렬

//   [1, 1, 1],
//   [2, 2, 2],
//   [0, 1, 0],

//   [3, 3, 3],
//   [4, 4, 4],
//   [5, 5, 100],
// ];

const [N, M] = input.shift();

// 1. 2차원 배열 선언
let arr = new Array(N).fill().map(() => new Array(M).fill(0));

//2. 배열의 합 구하기
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    arr[i][j] = input[i][j] + input[i + N][j];
  }
}

//3. 출력 양식 변경
let answer = "";

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    answer += arr[i][j] + " ";
  }
  answer += "\n";
}

console.log(answer);
