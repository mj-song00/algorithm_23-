const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [R, C] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < R; i++) {
  let row = "";
  for (let j = 0; j < C; j++) {
    row += "*";
  }
  console.log(row);
}
