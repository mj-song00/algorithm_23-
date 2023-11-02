// const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
// const input = require("fs")
//   .readFileSync(filePath)
//   .toString()
//   .trim()
//   .split(" ")
//   .map(Number);

// const [A, B, C] = input;

// let arr = [];

// if (A === B && A === C) {
//   console.log(10000 + A * 1000);
// } else if (A !== B && B !== C && C !== A) {
//   console.log(Math.max(A, Math.max(B, C)) * 100);
// } else {
//   arr = [A, B, C].filter((value, index, self) => {
//     return self.indexOf(value) === index;
//   });
//   console.log(arr[0] * 100 + 1000);
// }

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const current = input[0].split(" ").map(Number);
let arr = current;
arr.sort((a, b) => a - b);

let a = arr[0];
let b = arr[1];
let c = arr[2];

function prize(a, b, c) {
  if (a === b && b === c) {
    return 10000 + a * 1000;
  } else if (a === b || b === c) {
    return 1000 + b * 100;
  } else {
    return c * 100;
  }
}

console.log(prize(a, b, c));
