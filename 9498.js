const number = require("fs").readFileSync("9498.txt").toString().trim();

const count = parseInt(number);

// switch (count) {
//   case 90 <= count >= 100:
//     console.log("A");
//     break;
//   case 80 <= count >= 90:
//     console.log("B");
//     break;
//   case 70 <= count >= 79:
//     console.log("C");
//     break;
//   case 60 <= count >= 69:
//     console.log("D");
//     break;

//   default:
//     console.log("F");
// }

if (90 <= count && count <= 100) {
  console.log("A");
} else if (80 <= count && count < 90) {
  console.log("B");
} else if (70 <= count && count < 80) {
  console.log("C");
} else if (60 <= count && count < 70) {
  console.log("D");
} else {
  console.log("F");
}
