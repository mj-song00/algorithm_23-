const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const [N, num] = require("fs").readFileSync(filePath).toString().split("\n");

const nums = num.split("").map(Number);

console.log(nums.reduce((acc, cur) => acc + cur));
