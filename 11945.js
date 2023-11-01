const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

const [N, M] = input[0].split(" ");

// for (let i = 1; i < M; i++) {
//   for (let j = M - 1; j >= 1; j--) {
//     console.log(input[j]);
//   }
// }

for (let i = 1; i <= N; i++) {
  const line = input[i];

  let reversedLine = "";

  for (let j = M - 1; j >= 0; j--) {
    reversedLine += line[j];
  }

  console.log(reversedLine);
}
