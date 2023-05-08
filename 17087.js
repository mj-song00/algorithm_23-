// 수빈이는 동생 N명과 숨바꼭질을 하고 있다. 수빈이는 현재 점 S에 있고, 동생은 A1, A2, ..., AN에 있다.

// 수빈이는 걸어서 이동을 할 수 있다. 수빈이의 위치가 X일때 걷는다면 1초 후에 X+D나 X-D로 이동할 수 있다.
//수빈이의 위치가 동생이 있는 위치와 같으면, 동생을 찾았다고 한다.

// 모든 동생을 찾기위해 D의 값을 정하려고 한다. 가능한 D의 최댓값을 구해보자.

// 이 문제의 알고리즘 분류는 수학, 정수론, 유클리드 호제법이다

// 풀이 방법
// 1. S와 N의 거리를 구한다
// 1-1. N이 한개라면 N-S[0]의 값을 리턴한다.
// 2. N1과 N2의 최대값을 구한다
// 3. 2번값과 N3의 최대값을 구한다

const input = require("fs")
  .readFileSync("17087.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

// const N = input[0].split(" "); //동생
// const S = input[0].split(" ").slice("1"); // 현재위치
// const D = input[1].split(" "); // 동생위치

// function distance() {
//   const arr1 = [];
//   arr1.push(...S);
//   arr1.push(...D);

//   for (let i = 0; i < D.length; i++){

//   }
// }
// console.log(distance());

// function GCD(a, b) {
//   if (b == 0) return a;
//   return a > b ? GCD(b, a % b) : GCD(a, b % a);
// }

const [N, S] = input[0];
const brother = input[1].map((v) => Math.abs(S - v)); //abs() : 정수의 절대값을 구하는 함수

if (N == 1) {
  console.log(brother[0]);
} else {
  let gcd = GCD(brother[0], brother[1]);
  for (let i = 1; i < brother.length; i++) {
    gcd = GCD(gcd, brother[i]);
  }

  console.log(gcd);
}

function GCD(a, b) {
  if (b == 0) return a;
  return a > b ? GCD(b, a % b) : GCD(a, b % a);
}
