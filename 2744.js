const input = require("fs").readFileSync("2744.txt").toString().trim();

// const arr = [];

// for (i = 0; i < input.length; i++) {
//   if (input[i] === input[i].toUpperCase()) {
//     arr.push(input[i].toLowerCase());
//   } else {
//     arr.push(input[i].toUpperCase());
//   }
// }
// console.log(arr.join(""));

const result = input
  .split("")
  .map((char) => {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  })
  .join("");

console.log(result);
