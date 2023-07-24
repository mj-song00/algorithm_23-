const input = require("fs").readFileSync("11655.txt").toString().trim();

// let alphabet = [
//   a,
//   b,
//   c,
//   d,
//   e,
//   f,
//   g,
//   h,
//   i,
//   j,
//   k,
//   l,
//   n,
//   m,
//   o,
//   p,
//   q,
//   r,
//   s,
//   t,
//   u,
//   v,
//   w,
//   x,
//   y,
//   z,
// ];

// for (let value of alphabet) {
//   console.log(value);
// }

const compareArray = [];

for (let i = 0; i < input.length; i++) {
  const currentCharCode = input[i].charCodeAt(0);

  if (currentCharCode >= 65 && currentCharCode <= 90) {
    const shiftedCode = ((currentCharCode - 65 + 13) % 26) + 65;
    compareArray.push(String.fromCharCode(shiftedCode));
  } else if (currentCharCode >= 97 && currentCharCode <= 122) {
    const shiftedCode = ((currentCharCode - 97 + 13) % 26) + 97;
    compareArray.push(String.fromCharCode(shiftedCode));
  } else {
    compareArray.push(input[i]);
  }
}

console.log(compareArray.join(""));
