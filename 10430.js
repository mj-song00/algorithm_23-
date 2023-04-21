// (A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
// (A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
// 세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.

const [a, b, c] = require("fs")
  .readFileSync("10430.txt")
  .toString()
  .trim() //1. 공백제거 후 새로운 문자열 반환
  .split(" ")
  .map((i) => parseInt(i));

console.log((a + b) % c);
console.log(((a % c) + (b % c)) % c);

console.log((a * b) % c);
console.log(((a % c) * (b % c)) % c);
