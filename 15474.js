const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [n, a, b, c, d] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ");

// 첫 번째 세트의 비용
const cost1 = Math.ceil(n / a) * b;

// 두 번째 세트의 비용
const cost2 = Math.ceil(n / c) * d;

// 두 세트 중 최소 비용 선택
const minCost = Math.min(cost1, cost2);

console.log(minCost);
