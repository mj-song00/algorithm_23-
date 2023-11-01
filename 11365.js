const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");
//console.log(input[2].split("").reverse().join(""))

// for (i of input) {
//   if (i == "END") {
//     return " ";
//   }
//   console.log(input[i].split("").reverse().join(""));
// }

// let arr = [];

// if (input !== "END") {
//   input.push(arr);
// } else {
//   main();
// }

// const main = () => {
//   for (let i = 0; i < input.length; i++) {
//     console.log(input[i].split("").reverse().join(""));
//   }
// };
// function answer() {
//   if (input !== "END") {
//     input.push(arr);
//   } else {
//     for (let i = 0; i < input.length; i++) {
//       input[i].split("").reverse().join("");
//     }
//   }
//   console.log(arr);
// }

// console.log(answer(input));

function decryptCode(code) {
  if (code === "END") {
    return; // "END"일 경우 아무 작업도 하지 않습니다.
  }

  const reversed = code.split("").reverse().join(""); // 문자열을 뒤집습니다.
  console.log(reversed);
}

// 입력을 처리하고 암호를 해독하여 출력합니다.
for (const line of input) {
  decryptCode(line);
}
