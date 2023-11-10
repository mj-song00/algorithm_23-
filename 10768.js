const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const [month, days] = input;
console.log(month, days);

if (month === 2 && days === 18) {
  console.log("Special");
} else if (month < 2) {
  console.log("Before");
} else if (month > 2) {
  console.log("After");
} else if (month === 2 && days > 18) {
  console.log("After");
} else if (month === 2 && days < 18) {
  console.log("Before");
} else {
  console.log("error");
}
