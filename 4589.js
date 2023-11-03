const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

console.log("Gnomes:");
// for (let i = 1; i < input.length; i++) {
//   //   console.log(input[i].split(" ").sort((a, b) => b - a));
//   if (
//     (input[i] =
//       input[i].split(" ").sort((a, b) => a - b) ||
//       input[i].split(" ").sort((a, b) => b - a))
//   ) {
//     console.log("Ordered");
//   } else {
//     console.log("Unordered");
//   }
// }
for (let i = 1; i < input.length; i++) {
  const gnomeBeards = input[i].split(" ").map(Number);
  const sortedBeards = [...gnomeBeards].sort((a, b) => a - b);

  // Check if the array is sorted in ascending or descending order
  const isOrdered =
    JSON.stringify(gnomeBeards) === JSON.stringify(sortedBeards) ||
    JSON.stringify(gnomeBeards) === JSON.stringify(sortedBeards.reverse());

  if (isOrdered) {
    console.log("Ordered");
  } else {
    console.log("Unordered");
  }
}
