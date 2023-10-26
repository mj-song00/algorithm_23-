const { count } = require("console");

const input = require("fs")
  .readFileSync("input.txt")
  .toString()
  .trim()
  .split("\n");

function countVowels(sentence) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (vowels.includes(sentence[i])) {
      count++;
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
