const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().split("\n");

for (i of input) {
  const [x, y] = i.split(" ").map(Number);

  if (x === 0 && y === 0) {
    console.log("AXIS");
  } else if (x > 0 && y > 0) {
    console.log("Q1");
  } else if (x < 0 && y > 0) {
    console.log("Q2");
  } else if (x < 0 && y < 0) {
    console.log("Q3");
  } else if (x > 0 && y < 0) {
    console.log("Q4");
  } else {
    console.log("AXIS");
  }
}
