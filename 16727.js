const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const [p1, s1] = input[0].split(" ").map(Number);
const [s2, p2] = input[1].split(" ").map(Number);

if (p1 + p2 > s1 + s2) {
  console.log("Persepolis");
} else if (p1 + p2 < s1 + s2) {
  console.log("Esteghlal");
} else if (p1 + p2 === s1 + s2 && s1 > p2) {
  console.log("Esteghlal");
} else if (p1 + p2 === s1 + s2 && s1 < p2) {
  console.log("Persepolis");
} else {
  console.log("Penalty");
}
