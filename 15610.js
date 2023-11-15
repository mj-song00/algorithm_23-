const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

console.log((Math.sqrt(input) * 4).toFixed(8));
