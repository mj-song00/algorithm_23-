// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

//18 = 2 * 3 * 3
// 24 = 2 * 2 * 2 * 3

const [a, b] = require("fs")
  .readFileSync("2609.txt")
  .toString()
  .trim() //1. 공백제거 후 새로운 문자열 반환
  .split(" ")
  .map((i) => parseInt(i)); //2. 구조분해 할당 사용 3. 문자를 숫자로 변경

console.log(b);
// let a, b, rest; // 변수선언
// [a, b] = [10, 20];
// console.log(a);

// let i = a;
// let j = b;

// while (i % j !== 0) {
//   let n = i % j;
//   if (n !== 0) {
//     i = j;
//     j = n;
//   }
// } //조건이 ture일경우 계속 반복

// console.log(j); // 최대공약수
// console.log((a * b) / j); //최소공배수
