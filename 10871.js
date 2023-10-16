const input = require("fs")
  .readFileSync("10871.txt")
  .toString()
  .trim()
  .split("\n");

const [N, X] = input[0].split(" ").map(Number);

const num = input[1].split(" ").map(Number);

// for (let i = 0; i < num.length; i++) {
//   if (num[i] < X) console.log(num[i]);
// }

const data = num.filter((v) => X > v).join(" ");
console.log(data);
