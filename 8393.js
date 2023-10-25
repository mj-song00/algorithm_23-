const input = require("fs").readFileSync("input.txt").toString().trim();

let answer = 0;
for (let i = 0; i <= input; i++) {
  answer += i;
}
console.log(answer);
