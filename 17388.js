const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [Soongsil, Korea, Hanyang] = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const universities = ["Soongsil", "Korea", "Hanyang"];
const scores = [Soongsil, Korea, Hanyang];
const sum = Soongsil + Korea + Hanyang;

if (sum >= 100) {
  console.log("OK");
} else {
  const minIndex = scores.indexOf(Math.min(...scores));
  console.log(universities[minIndex]);
}
