const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

function countVowels(sentence) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    //입력값의 길이까지
    if (vowels.includes(sentence[i])) {
      //vowels가 senence[i]값을 포함한다면
      count++; // count 증가
    }
  }
  return count;
}

const results = [];

for (let i = 0; i < input.length; i++) {
  if (input[i] === "#") {
    break;
  }
  const numVowels = countVowels(input[i]);
  results.push(numVowels);
}

for (const result of results) {
  console.log(result);
}
