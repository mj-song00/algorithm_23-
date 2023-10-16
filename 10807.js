const input = require("fs")
  .readFileSync("10807.txt")
  .toString()
  .trim()
  .split("\n");

const len = parseInt(input[0]); // 총 길이
const int = input[1].split(" ").map(Number); //정수 리스트
const num = parseInt(input[2]); // 찾는 숫자
let count = 0;

// for (let i = 0; i < len; i++) {
//   if (int[i] === num) {
//     count++;
//   }
// }
// console.log(count);

const answer = int.filter((v) => v === num).length;
console.log(answer);
