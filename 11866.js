const [N, K] = require("fs")
  .readFileSync("11866.txt")
  .toString()
  .trim()
  .split(" ");

// const arr = [];

// for (let i = 1; i < N; i++) {
//   arr.push(i);
// }

// console.log(arr);

// var CircularQueue = function (queueSize) {
//   // Array 객체 생성
//   this.queue = [];
//   // 데이터 가져오는 위치
//   this.front = 0;
//   // 데이터 넣는 위치
//   this.rear = 0;
//   // 큐의 크기
//   this.queueSize = queueSize;
//   // 큐 초기화
//   for (var index = 0; index < queueSize; index++) {
//     this.queue.push(null);
//   }
//   // 큐에 데이터 넣기 함수
//   this.add = function (data) {
//     var result = true;
//     if (this.isFull()) {
//       console.log("Queue Full");
//       result = false;
//     } else {
//       this.rear = (this.rear + 1) % queueSize;
//       this.queue[this.rear] = data;
//     }
//     return result;
//   };
//   //큐 데이터 제거
//   this.remove = function () {
//     var result = null;
//     if (this.isEmpty()) {
//       console.log("Queue Empty");
//     } else {
//       this.front = (this.front + 1) % queueSize;
//       result = this.queue[this.front];
//       this.queue[this.front] = null;
//     }
//     return result;
//   };
//   // 큐 공백상태 확인
//   this.isEmpty = function () {
//     return this.front == this.rear ? true : false;
//   };
//   // 큐에 데이터가 포화 상태인지 확인하는 함수
//   this.isFull = function () {
//     return this.front == (this.rear + 1) % this.queueSize ? true : false;
//   };
// };

class Node {
  constructor(item) {
    this.item = item;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(item) {
    const node = new Node(item);
    if (this.head === null) {
      this.head = node;
      this.head.next = null;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.empty() == 1) return -1;
    const popItem = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return popItem.item;
  }

  size() {
    return this.length;
  }

  empty() {
    if (this.size() == 0) {
      return 1;
    } else {
      return 0;
    }
  }

  front() {
    if (this.empty() == 1) return -1;
    return this.head.item;
  }

  back() {
    if (this.empty() == 1) return -1;
    return this.tail.item;
  }
}
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(i);
}

let answer = [];
let q = new Queue();
for (let i = 1; i <= N; i++) {
  q.push(i);
}
let cnt = 1;

while (q.size() != 0) {
  let temp = q.pop();
  if (cnt < K) {
    q.push(temp);
    cnt++;
  } else {
    answer.push(temp);
    cnt = 1;
  }
}

console.log(`<${answer.join(", ")}>`);
