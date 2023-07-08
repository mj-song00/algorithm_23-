const input = require("fs").readFileSync("1676.txt").toString().trim();
// let count = 0;
// let num = input;

// function factorial(input) {
//   return input > 0 ? input * factorial(input - 1) : 1;
// }

// //console.log(count);

// console.log(factorial(input));

function Factorial(input) {
  let answer = 0;
  if (input === 0) answer;
  for (let i = 1; i <= input; i++) {
    if (i % 5 === 0) answer++;
    if (i % 25 === 0) answer++;
    if (i % 125 === 0) answer++;
  }
  return answer;
}

console.log(Factorial(input));
