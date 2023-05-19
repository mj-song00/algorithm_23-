// let input = require("fs")
//   .readFileSync("10854.txt")
//   .toString()
//   .trim()
//   .split("\n");
// // /dev/stdin

// class Node {
//   constructor(item) {
//     this.item = item;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }

//   push(item) {
//     const node = new Node(item);
//     if (this.head === null) {
//       this.head = node;
//       this.head.next = null;
//     } else {
//       this.tail.next = node;
//     }

//     this.tail = node;
//     this.length += 1;
//   }

//   pop() {
//     if (this.empty() == 1) return -1;
//     const popItem = this.head;
//     this.head = this.head.next;
//     this.length -= 1;
//     return popItem.item;
//   }

//   size() {
//     return this.length;
//   }

//   empty() {
//     if (this.size() == 0) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }

//   front() {
//     if (this.empty() == 1) return -1;
//     return this.head.item;
//   }

//   back() {
//     if (this.empty() == 1) return -1;
//     return this.tail.item;
//   }
// }

// // const arr = [];
// // for (let i = 1; i < input.length; i++) {
// //   console.log(arr.push(input[i]));
// // }

// const queue = new Queue();
// const arr = [];

// for (let i = 1; i < input.length; i++) {
//   console.log(input[i].split(" "));
//   switch (input[i].split(" ")) {
//     case "push":
//       arr.push(input[i][1]);
//   }
// }

// console.log(arr);

const fs = require("fs");
const input = fs.readFileSync("10854.txt").toString().split("\n");

const queue = [];
const answer = [];
const len = Number(input[0]);

for (let i = 1; i <= len; i++) {
  let cmd = input[i].split(" ");

  switch (cmd[0]) {
    case "push":
      queue.push(cmd[1]);
      break;
    case "pop":
      answer.push(queue.shift() || -1);
      break;
    case "size":
      answer.push(queue.length);
      break;
    case "empty":
      answer.push(queue[0] ? 0 : 1);
      break;
    case "front":
      answer.push(queue[0] || -1);
      break;
    case "back":
      answer.push(queue[queue.length - 1] || -1);
      break;
  }
}

console.log(answer.join("\n"));
