// const input = require("fs").readFileSync("10988.txt").toString().trim();
// let answer = false;

// for (let i = 0; i < input.length; i++) {
//   if (input.length % 2 == 0);
//   { if (input[i] === input[])
//   }
// }
const word = require("fs").readFileSync("10988.txt").toString().trim();
const len = word.length / 2;
const left = word.slice(0, parseInt(len));
const right = word.slice(Number.isInteger(len) ? len : parseInt(len) + 1);
left === right.split("").reverse().join("") ? console.log(1) : console.log(0);
