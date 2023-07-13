// const input = require("fs").readFileSync("10808.txt").toString().trim();

// const alphabets = [
//   "a",
//   "b",
//   "c",
//   "d",
//   "e",
//   "f",
//   "g",
//   "h",
//   "i",
//   "j",
//   "k",
//   "l",
//   "m",
//   "n",
//   "o",
//   "p",
//   "q",
//   "r",
//   "s",
//   "t",
//   "u",
//   "v",
//   "w",
//   "x",
//   "y",
//   "z",
// ];

// const count = [];

// for (nums of input) {
//     if (nums[i] == input[i]) {

//  }
// }

const s = require("fs").readFileSync("10808.txt").toString().split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);
s.forEach((i) => counts[alphabet.indexOf(i)]++);

console.log(counts.join(" "));
