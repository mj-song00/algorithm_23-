const input = require("fs")
  .readFileSync("9012.txt")
  .toString()
  .trim()
  .split("\n");

// 입력받은 문자열을 확인한다.
// '('와 ')'의 갯수를 확인한다.
// '(' 와 ')'의 갯수가 일차하지 않으면 No를 return 한다.

let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n"); // /dev/stdin

for (let i = 1; i <= parseInt(inputs[0]); i++) {
  const stack = [];
  let result = true;
  for (let j = 0; j < inputs[i].length; j++) {
    if (inputs[i][j] === "(") stack.push(inputs[i][j]);
    else if (inputs[i][j] === ")") {
      if (!stack.pop()) {
        result = false;
      }
    }
  }
  if (stack.length !== 0) {
    result = false;
  }

  if (result == false) console.log("NO");
  else console.log("YES");
}
