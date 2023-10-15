const input = require("fs").readFileSync("2741.txt").toString();

let answer = "";

for (i = 1; i <= input; i++) {
  answer += i + "\n";
}

console.log(answer);
