const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const word = input[1];

let count = 0;

for (words of word) {
  switch (words) {
    case "a":
      count++;
      break;
    case "i":
      count++;
      break;
    case "u":
      count++;
      break;
    case "e":
      count++;
      break;
    case "o":
      count++;
      break;
  }
}

console.log(count);
