let input = require("fs").readFileSync("1436.txt").toString();

let a = 666;

while (true) {
  if (a.toString().includes("666")) {
    input -= 1;
    if (input == 0) break;
  }

  a += 1;
}

console.log(a);
