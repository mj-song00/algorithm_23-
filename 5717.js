const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

// for (let i = 0; i < input.length - 1; i++) {
//   const M = parseInt(input[i][0]);
//   const F = parseInt(input[i][2]);

//   if (M + F !== 0) {
//     console.log(M + F);
//   }
// }

for (i of input) {
  const M = parseInt(i[0]);
  const F = parseInt(i[2]);

  if (M + F !== 0) {
    console.log(M + F);
  }
}
