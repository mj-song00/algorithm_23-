//주어진 수 N개 중에서 소수가 몇 개인지 찾아서 출력하는 프로그램을 작성하시오.

// 1보다 큰 자연수 중 1과 자기 자신만을 약수로 가지는 수다.
// 소수인지 아닌지를 검증하는 boolean 변수 isPrime을 선언하고 초기값을 true로 두었다.
// 입력값이 1인 경우일 때 isPrime값을 false로 변경한다.
// 입력값이 2 이상인 경우, 2부터 (입력값-1)으로 나누었을 때 결과값이 0이 나온다면 약수가 있다는 뜻이므로 isPrime값을 false로 변경한다.
// 3과 4의 경우에 해당하지 않으면 isPrime은 true로 남게 되고, isPrime이 true일 때 total을 1씩 증가시킨다.
// total값을 출력한다.

const input = require("fs")
  .readFileSync("1978.txt")
  .toString()
  .trim()
  .split("\n");

const nums = input[1].split(" ").map(Number);
let total = 0;

for (const num of nums) {
  //반복 가능한 객체에 대해 반복하며 속성값 출력

  let isPrime = true;
  if (num === 1) isPrime = false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) isPrime = false;
  }
  isPrime === true && total++;
}

//console.log(total);
