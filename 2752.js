const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");

console.log(input.sort((previous, current) => previous - current).join(" "));

//arr.sort((previous, current) => previous-current); //오름차순
//arr.sort((previous, current) => current-previous); //내림차순
