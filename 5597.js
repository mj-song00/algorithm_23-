const input = require("fs")
  .readFileSync("5597.txt")
  .toString()
  .trim()
  .split("\n");

const n = 30;
const m = input.map(Number);

// for (let i = 1; i <= 30; i++) {
//   if (!input.includes(i)) nums.push(i);

//   if (nums.length === 2) break;
// }

//console.log(nums);

let arr = new Array(n).fill().map((v, i) => i + 1);

// arr에  input값(m)이 있는지 확인
let arr2 = arr.filter((x) => !m.includes(x));

console.log(arr2.join(" "));

//2
// for (let i = 1; i <= 30; i++) {
//   if (!data.includes(i)) console.log(i);
// }
