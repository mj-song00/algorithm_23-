const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .split(" ")
  .map((el) => el.trim()) // 각 요소의 앞뒤 공백 제거
  .filter((el) => el !== ""); // 빈 문자열 필터링

input.forEach((el) => el);

console.log(input.length);
