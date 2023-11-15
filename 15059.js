const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

let arr = [];
const meal = input[0].split(" ");
const order = input[1].split(" ");
for (let i = 0; i < input.length; i++) {
  if (Number(meal[i]) < Number(order[i])) {
    arr.push(Number(order[i]) - Number(meal[i]));
  } else {
    arr.push(0);
  }
}

const answer = arr.reduce((acc, cur) => acc + cur, 0);
console.log(answer);
