// 두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.

// 받은 두 수를 소수가 될때까지 나눈다
// 24 = 2 * 2 * 2 * 3
// 18 = 2 * 3 * 3
const [a, b] = require("fs")
  .readFileSync("2609.txt")
  .toString()
  .split("\n")
  .map((i) => parseInt(i));

let i = a;
let j = b;

while (i % j !== 0) {
  let n = i % j;
  if (n !== 0) {
    i = j;
    j = n;
  }
}
console.log(j);
console.log((i * j) / j);
