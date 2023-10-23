const input = require("fs")
  .readFileSync("4101.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

//console.log(input);

let i = 0;
while (true) {
  if (input[i][0] === 0 && input[i][1] === 0) {
    break;
  } else if (input[i][0] > input[i][1]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  i++;
}
