const input = require("fs").readFileSync("2438.txt").toString();

for (let i = 1; i <= input; i++) {
  const star = "*";
  console.log(star.repeat(i));
}

// 거꾸로된 피라미드 찍을경우
// for (let i = input; i >= 1; i--) {  ////input값부터 시작해서 i가 1보다 크거나 같을때까지 i감소
//   const star = "*";
//   console.log(star.repeat(i));
// }
// 출력값
// *****
// ****
// ***
// **
// *

// 좌우반전 거꾸로 피라미드
// for (let i = input; i > 0; i--) { //i는 input값부터 i가 0보다 클때까지 i감소
//   console.log(" ".repeat(input - i) + "*".repeat(i)); //input값에서 -i만큼 공백값 반복 + i값 만큼 * 반복
// }
// //출력값
// // *****
// //  ****
// //   ***
// //    **
// //     *

// 좌우반전 피라미드
// for (let i = 1; i <= input; i++) {
//   console.log(" ".repeat(input - i) + "*".repeat(i));
// }
// //출력값
// //     *
// //    **
// //   ***
// //  ****
// // *****

//중앙 피라미드
// for (let i = 1, j = 0; i <= input; i++) { //i는 1부터 j는 0, i가 input값과 같아질때까지 i증가
//   console.log(" ".repeat(input - i) + "*".repeat(i + j)); // 공백을 input - i 값까지 반복 + *을 i+j값까지 반복
//   j = j + 1;
// }
// //출력값
// //     *
// //    ***
// //   *****
// //  *******
// // *********
