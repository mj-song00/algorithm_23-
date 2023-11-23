const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("");

//2자리 2자리
if (input.length === 4) {
  console.log((input[0] + input[1]) * 1 + (input[2] + input[3]) * 1);

  //2자리 1자리(가운데가 0)
} else if (input.length === 3 && input[1] === 0) {
  console.log(input[0]);
  console.log((input[0] + input[1]) * 1 + input[2] * 1);

  //1자리 2자리
} else if (input.length === 3) {
  console.log(input[0]);
  console.log((input[0] + input[1]) * 1 + input[2] * 1);

  //1자리 1자리
} else if (input.length === 2) {
  console.log(input[0] * 1 + input[1] * 1);
}
