// const input = require("fs")
//   .readFileSync("2309.txt")
//   .toString()
//   .trim()
//   .split("\n");

// input.sort((a, b) => a - b);

// let answer = 0;
// const arr = [];

// input.forEach(function (input) {
//   answer += input * 1;
//   console.log(answer);
// });

// // console.log(answer);
const fs = require("fs");
const heights = fs
  .readFileSync("2309.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let dwarf = null;

for (let i = 0; i < heights.length - 1; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    const sum = heights.reduce((acc, curr) => {
      return acc + curr;
    }, 0);

    if (sum - heights[i] - heights[j] === 100) {
      dwarf = heights.filter(
        (height) => height !== heights[i] && height !== heights[j]
      );

      break;
    }
  }

  if (dwarf) {
    break;
  }
}

console.log(dwarf.sort((a, b) => a - b).join("\n"));
