const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

// for (let i = 0; i < input.length - 1; i++) {
//   const [name, age, weight] = input[i].split(" ");
//   if (input[i] === "# 0 0") console.log("");
//   console.log(age > 17 || weight >= 80 ? `${name} Senior` : `${name} Junior`);
// }
for (const line of input) {
  const [name, age, weight] = line.split(" ");
  if (name === "#" && age === "0" && weight === "0") {
    break; // 입력 종료 조건
  }
  if (parseInt(age) > 17 || parseInt(weight) >= 80) {
    console.log(`${name} Senior`);
  } else {
    console.log(`${name} Junior`);
  }
}
