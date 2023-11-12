const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const people = input[0].split(" ").map(Number);
const circle = input[1].split(" ");
const [x, y, r] = input[1].split(" ").map(Number);
// let found = false;
// for (let i = 1; i <= 4; i++) {
//   const x = people[i - 1];
//   if (x === circle[0]) {
//     console.log(i);
//     found = true;
//     break; // 찾았으니 루프 종료
//   }
// }

// if (!found) {
//   console.log(0);
// }

const answer = people.indexOf(x);
answer === -1 ? console.log(0) : console.log(answer + 1);
