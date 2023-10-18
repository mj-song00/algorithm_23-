const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const arr2 = [
  [4, 5, 6],
  [7, 4, 1],
  [9, 6, 3],
];
// Q. arr1 + arr2의 합을 구하시오

const arr = new Array(arr1.length)
  .fill()
  .map(() => new Array(arr1[0].length).fill(0));

for (let i = 0; i < arr1.length; i++) {
  for (let j = 0; j < arr1[i].length; j++) {
    arr[i][j] = arr1[i][j] + arr2[i][j];
  }
}

let answer = "";

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    answer += arr[i][j] + " ";
  }
  answer += "\n";
}
console.log(answer);
