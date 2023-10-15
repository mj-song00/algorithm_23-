const input = require("fs")
  .readFileSync("2753.txt")
  .toString()
  .trim() //1. 공백제거 후 새로운 문자열 반환
  .split(" ");

//윤년:
//1. 4의 배수이면서, 100의 배수는 아닌 수
//2. 400의 배수

function answer() {
  //if ((input % 4 ===0) && (input%100 !==0)){}
  return (input % 4 === 0 && input % 100 !== 0) || input % 400 === 0 ? 1 : 0;
}

console.log(answer(input));
