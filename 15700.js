const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

const n = parseInt(input[0]);
const m = parseInt(input[1]);

console.log(parseInt((m * n) / 2));
