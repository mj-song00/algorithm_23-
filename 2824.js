// 상근이는 학생들에게 두 양의 정수 A와 B의 최대공약수를 계산하는 문제를 내주었다. 그런데, 상근이는 학생들을 골탕먹이기 위해 매우 큰 A와 B를 주었다.

// 상근이는 N개의 수와 M개의 수를 주었고, N개의 수를 모두 곱하면 A, M개의 수를 모두 곱하면 B가 된다.

// 이 수가 주어졌을 때, 최대공약수를 구하는 프로그램을 작성하시오.

const [n, a, m, b] = require("fs")
  .readFileSync("2824.txt")
  .toString()
  .trim()
  .split("\n");

let arr1 = [];
let arr2 = [];
for (let i = 0; i < a; i++) {
  arr1[i] = arr1.push(parent(i));
}
console.log(arr1);
