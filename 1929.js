const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ");

//1. 제곱근이 있는 경우 false값 넣기
// function isPrime(num) {
//   if (num === 1) return false; //1은 소수가 아니다
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     //2부터 num의 제곱근과 작거나 같을때까지 i증가
//     if (num % i === 0) return false; // num %i 가 0 이면 false
//   }
//   return true; // 아니면 true
// }

// const [n, m] = input.map((e) => Number(e)); //n,m string-> number로 변환
// for (let i = n; i <= m; i++) {
//   //i는 n, i가 m보다 작거나 같을 때까지 i증가
//   isPrime(i) ? console.log(i) : null; // isPrime이 true일 경우 콘솔 출력 아니면 null
// } //채점시간 3분

//2. 에라토스테네스의 체
const [n, m] = input.map((e) => parseInt(e));
const arr = Array.from(Array(m + 1).keys());
for (let i = 2; i <= Math.sqrt(m); i++) {
  if (arr[i]) for (let j = i * i; j <= m; j += i) arr[j] = false;
}
arr.splice(0, 2, false, false);
for (let i = n; i <= m; i++) {
  if (arr[i]) console.log(arr[i]);
}
//
