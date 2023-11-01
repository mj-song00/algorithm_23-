const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const N = require("fs").readFileSync(filePath).toString();

console.log(N * (N - 1));
