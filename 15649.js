const [n, m] = require("fs")
  .readFileSync("15649.txt")
  .toString()
  .trim()
  .split(" ");

const N = n * 1;
const M = m * 1;

function answer() {
  for (i = 1; i <= N; i++) {
    console.log(i);
    for (j = 1; j <= M; j++) {
      console.log(j);
    }
  }

  console.log(`${i} ${j}`);
}

console.log(answer());
