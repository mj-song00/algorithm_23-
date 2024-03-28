const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split(" ");

// for (i = 2; i <= K; i++) {
//   if (P % i === 0) {
//     console.log("BAD", i);
//   } else {
//     console.log("GOOD");
//   }
// }
const P = BigInt(input[0]);
const K = Number(input[1]);

let isGood = true;
let badPrime = 0n;

for (let i = 2n; i <= BigInt(K); i++) {
  if (P % i === 0n) {
    if (i < BigInt(K)) {
      isGood = false;
      badPrime = i;
      break;
    }
  }
}
if (isGood) {
  console.log("GOOD");
} else {
  console.log("BAD", badPrime.toString());
}
