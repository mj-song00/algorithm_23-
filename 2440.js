const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

for (let i = input; i >= 1; i--) {
  ////input값부터 시작해서 i가 1보다 크거나 같을때까지 i감소
  const star = "*";
  console.log(star.repeat(i));
}
