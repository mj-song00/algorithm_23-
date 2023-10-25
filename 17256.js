const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

const [ax, ay, az] = input[0].split(" ");
const [cx, cy, cz] = input[1].split(" ");

const bx = cx - az;
const by = cy / ay;
const bz = cz - ax;

console.log(`${bx} ${by} ${bz}`);
