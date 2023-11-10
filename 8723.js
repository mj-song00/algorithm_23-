const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [a, b, c] = input.sort((a, b) => a - b);
console.log(a, b, c);

if (a ** 2 + b ** 2 === c ** 2) {
  console.log("1");
} else if (a === b && b === c) {
  console.log("2");
} else {
  console.log("0");
}
