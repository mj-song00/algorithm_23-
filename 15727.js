const input = require("fs").readFileSync("input.txt").toString().trim();

const distance = 5;

console.log(Math.ceil(input / distance));
