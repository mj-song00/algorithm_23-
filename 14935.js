const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = require("fs").readFileSync(filePath).toString().split("");

//console.log(input.length); 3

function F(data) {
  if (data.length === 1) {
    return "FA";
  }
  const result = parseInt(data[0] * data.length);
  return F(result.toString());
}

const answer = F(input);
console.log(answer);
