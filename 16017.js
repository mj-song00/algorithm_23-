const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

for (let i = 0; i < input.length; i++) {
  //   if (
  //     (input[0] === 8 || input[0] === 9) &&
  //     (input[3] === 8 || input[3] === 9) &&
  //     input[1] === input[2]
  //   ) {
  //     console.log("ignore");
  //   } else {
  //     console.log("answer");
  //   }
  //   console.log(
  //     (input[0] === 8 || input[0] === 9) &&
  //       (input[3] === 8 || input[3] === 9) &&
  //       input[1] === input[2]
  //       ? "ignore"
  //       : "answer"
  //   );
  if (input[0] === 8 || input[0] === 9) {
    if (input[3] === 8 || input[3] === 9) {
      if (input[1] === input[2]) {
        console.log("ignore");
      }
    }
  } else {
    console.log("answer");
  }
}
