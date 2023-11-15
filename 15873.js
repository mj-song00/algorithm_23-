const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");

if (input.length === 4) {
  console.log((input[0] + input[1]) * 1 + (input[2] + input[3]) * 1);
} else if (input.length === 3 && input[1] === 1) {
  console.log(input[0] * 1 + (input[1] + input[2]) * 1);
} else if (input.length === 3) {
  console.log((input[0] + input[1]) * 1 + input[2] * 1);
} else if (input.length === 2) {
  console.log(input[0] * 1 + input[1] * 1);
}
