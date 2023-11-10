const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const [k, w, m] = input;

const answer = Math.floor(parseInt((w - k) / m)) + 1;

console.log(answer);
