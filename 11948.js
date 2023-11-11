const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [A, B, C, D, E, F] = input; // 물리, 화학, 생물, 지구과학, 역사, 지리

let sum = 0;

let nums1 = [];
let nums2 = [];

for (let i = 0; i < 4; i++) {
  nums1.push(input[i]);
}

for (let i = input.length - 1; i >= input.length - 2; i--) {
  nums2.push(input[i]);
}

function sort(a, b) {
  return b - a;
}

nums1.sort(sort);

for (let i = 0; i < 3; i++) {
  sum += nums1[i];
}

sum += Math.max(nums2[0], nums2[1]);
console.log(sum);
