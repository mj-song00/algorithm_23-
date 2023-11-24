const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim();

const n = input % 8;

if (n === 1) {
  console.log("1");
} else if (n === 0 || n === 2) {
  console.log("2");
} else if (n === 3 || n === 7) {
  console.log("3");
} else if (n === 4 || n === 6) {
  console.log("4");
} else {
  console.log("5");
}

// const result =
//   n === 1
//     ? "1"
//     : n === 0 || n === 2
//     ? "2"
//     : n === 3 || n === 7
//     ? "3"
//     : n === 4 || n === 6
//     ? "4"
//     : "5";

// console.log(result);

// switch (n) {
//   case 1:
//   case 7:
//     console.log(2);
//     break;
//   case 2:
//   case 6:
//     console.log(3);
//     break;
//   case 3:
//   case 5:
//     console.log(4);
//     break;
//   case 4:
//     console.log(5);
//     break;
//   default:
//     console.log(1);
//     break;
// }
