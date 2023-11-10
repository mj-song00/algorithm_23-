const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .split("\n")
  .map(Number);

const [A, B, C] = input;

if (A === B && B === C) {
  console.log("Equilateral");
} else if ((A + B + C === 180 && A === B) || B === C || C === A) {
  console.log("Isosceles");
} else if (A + B + C === 180 && A !== B && B !== C && C !== A) {
  console.log("Scalene");
} else {
  console.log("Error");
}
