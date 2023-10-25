const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const [N, M, K] = input;

// const arr = [];
// let count = 0;
// for (let i = 0; i < N; i++) {
//   const cells = [];
//   for (let j = 0; j < M; j++) {
//     cells.push(count);
//     count++;
//   }
//   arr.push(cells);
// }

// const rowIndex = arr.findIndex((row) => row.includes(K));
// const columnIndex = arr[rowIndex].indexOf(K);

// console.log(rowIndex, columnIndex);

console.log(Math.floor(K / M) + " " + (K % M));
