const input = BigInt(
  require("fs").readFileSync("input.txt").toString().trim().split(" ")
);

console.log((input % BigInt(20000303)).toString());
