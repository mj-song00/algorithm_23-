const input = require("fs").readFileSync("2739.txt").toString().trim();

for (let i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}
