const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

//console.log((input[0] && input[1] && input[2]) === 5 ? "YES" : "NO");
//console.log(input.slice(0, 3) === "555" ? "YES" : "NO");

console.log(input.slice(0, 3) === "555" ? "YES" : "NO");
