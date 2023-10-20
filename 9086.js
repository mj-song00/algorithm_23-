const input = require("fs").readFileSync("9086.txt").toString().split("\n");

const T = input[0];

for (i = 1; i <= T; i++) {
  console.log(
    input[i].substring(0, 1) +
      input[i].substring(input[i].length - 1, input[i].length)
  );
}
