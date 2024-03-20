const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "input.txt")
  .toString()
  .trim()
  .split("\n");

const fbi = [];

input.forEach((e, index) => {
  if (e.includes("FBI")) {
    fbi.push(index + 1);
  }
});

if (fbi.length === 0) {
  console.log("HE GOT AWAY!");
} else {
  console.log(fbi.join(" "));
}
