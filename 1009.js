const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

// 남은 데이터
// input.slice(1).forEach((testCase) => {
//   const [a, b] = testCase.split(" ").map(BigInt); // a와 b를 BigInt로 추출
//   const result = a ** b % 10n; // a의 b승을 계산하고 10으로 나눈 나머지를 구합니다.
//   const lastComputer = result === 0n ? 10 : Number(result); // 결과가 0인 경우에는 10으로 처리합니다.
//   console.log(lastComputer);
// });
let N = input.shift();

const result = input.map((v) => {
  const [a, b] = v.split(" ");

  let pow = 1;

  for (let j = 0; j < b; j++) {
    pow = (pow * a) % 10;
  }

  return pow === 0 ? 10 : pow;
});

console.log(result.join("\n"));
