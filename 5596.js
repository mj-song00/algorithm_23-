const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const minScores = input[0].split(" ").map(Number);
const manScores = input[1].split(" ").map(Number);

const minScore = minScores.reduce((acc, curr) => acc + curr, 0);
const manScore = manScores.reduce((acc, curr) => acc + curr, 0);
const result = Math.max(minScore, manScore);

console.log(result);
