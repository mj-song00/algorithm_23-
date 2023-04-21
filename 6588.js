// 1742년, 독일의 아마추어 수학가 크리스티안 골드바흐는 레온하르트 오일러에게 다음과 같은 추측을 제안하는 편지를 보냈다.
// 4보다 큰 모든 짝수는 두 홀수 소수의 합으로 나타낼 수 있다.
// 예를 들어 8은 3 + 5로 나타낼 수 있고, 3과 5는 모두 홀수인 소수이다. 또, 20 = 3 + 17 = 7 + 13, 42 = 5 + 37 = 11 + 31 = 13 + 29 = 19 + 23 이다.
// 이 추측은 아직도 해결되지 않은 문제이다.

// 백만 이하의 모든 짝수에 대해서, 이 추측을 검증하는 프로그램을 작성하시오.

// 풀이
// 입력된 문자를 숫자로 바꾼다(o)
// 입력된 수를 담을 배열을 생성한다(o)
// input을 순회한다(o)
// 순회하면서 숫자의 합이 되는 조합을 구한다
// const input = require("fs")
//   .readFileSync("6588.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((i) => parseInt(i));

// let arr1 = [];
// let arr2 = [];

// //arr1의 원소 구하기
// for (nums of input) {
//   for (let i = 0; i <= nums / 2; i++) {
//     arr1.push(i);
//     console.log(arr1);
//   }
// }

// //arr2의 원소구하기
// for (let i = 0; i < arr1.length; i++) {
//   arr2.push(input - arr1[i]);
//   console.log(arr2);
// }

// 1. 소수를 구한다
// 2. 소수중 해당값에 해당하는 숫자를 구한다?
// 3. 반복문을 돌려 input값이 나오게 한다.
// const input = require("fs")
//   .readFileSync("6588.txt")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((i) => parseInt(i));

// function solution(n) {
//   let arr = [];
//   // 1은 소수가 아니고, 2부터 소수가 될 수 있으므로, 2부터 구하고자 하는 값까지의 배열을 만든다.
//   for (let i = 2; i <= n; i++) {
//     arr[i] = i;
//   }
//   // 2부터 시작해서 2배수 이상의 숫자를 모두 지우되, 이미 지워진 숫자는 건너 뛴다.
//   for (let i = 2; i <= n; i++) {
//     for (let j = i + i; j <= n; j += i) {
//       if (arr[j] === 0) {
//         continue;
//       }
//       arr[j] = 0;
//     }
//   }
//   return arr.filter((item) => item !== 0);
// }

// let loop = solution(input);

// function answer() {
//   for (nums of loop) {
//     for (let i = 0; i < nums.length; i++) {
//       console.log("여긴 지나가나 ");
//       for (let j = 0; j < nums.length; j++) {
//         if (nums[i] + nums[j] === input) {
//           console.log(nums[i], nums[j]);
//           return `input = nums[i]+nums[j]`;
//         }
//       }
//     }
//   }
// }

// console.log(answer());

// 먼저 1, 000, 000까지의 자연수 중에서 소수를 모두 구한다.
// 그 다음 주어진 수들을 가장 작은 소수부터 큰 소수까지 순서대로 두 값의 차가 소수가 되는 가장 작은 소수를 찾는다.
// 그러한 소수가 존재하면 n = a + b 형태로 출력하고, 존재하지 않으면 골드바흐의 추측이 틀렸다는 문자열을 반환하면 된다.

const input = require("fs")
  .readFileSync("6588.txt")
  .toString()
  .trim()
  .split("\n")
  .map((i) => parseInt(i));

const primeNums = [];
const nums = Array(1_000_000 + 1).fill(true);
nums[0] = false;
nums[1] = false;

for (let i = 2; i <= Math.sqrt(1_000_000); i++) {
  if (!nums[i]) {
    continue;
  }
  primeNums.push(i);
  for (let j = i * 2; j <= 1_000_000; j += i) {
    nums[j] = false;
  }
}

console.log(
  input
    .slice(0, -1)
    .map((num) => {
      const low = primeNums.find((primeNum) => nums[num - primeNum]);
      if (low) {
        const high = num - low;
        return `${num} = ${low} + ${high}`;
      }
      return "Goldbach's conjecture is wrong.";
    })
    .join("\n")
);
