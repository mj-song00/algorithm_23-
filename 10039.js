const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

// let modi = input.map((num) => (num < 40 ? 40 : num));
// let sum = modi.reduce((acc, cur) => acc + cur, 0);
// let average = Math.floor(sum / 5);
// console.log(average);

// let sum = input.reduce((a, b) => {
//   if (b < 40) b = 40;
//   return a + b;
// }, 0);

let sum = 0;
for (let i = 0; i < 5; i++) {
  if (input[i] < 40) {
    input[i] = 40;
  }
  sum += Number(input[i]);
}

let result = Math.floor(sum / 5);
console.log(result);

// 반례가 뭐였을까
