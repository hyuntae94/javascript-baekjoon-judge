const [[N, M], ...input] = `4 2
4 2
3 1`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push = (param) => {
    this.heap.push(param);
    let curIdx = this.heap.length - 1;
    let parentIdx = parseInt((curIdx - 1) / 2);
    while (curIdx > 0 && this.heap[parentIdx] > this.heap[curIdx]) {
      this.swap(curIdx, parentIdx);
      curIdx = parentIdx;
      parentIdx = parseInt((curIdx - 1) / 2);
    }
  };

  pop = () => {
    if (this.heap.length === 1) return this.heap.pop();

    const result = this.heap[0];
    this.heap[0] = this.heap.pop();
    let i = 0;
    while (1) {
      const leftIdx = i * 2 + 1;
      const rightIdx = i * 2 + 2;
      if (leftIdx >= this.heap.length) break;
      let nextIdx = i;

      if (this.heap[nextIdx] > this.heap[leftIdx]) {
        nextIdx = leftIdx;
      }
      if (
        rightIdx < this.heap.length &&
        this.heap[nextIdx] > this.heap[rightIdx]
      ) {
        nextIdx = rightIdx;
      }
      if (nextIdx === i) {
        break;
      }
      this.swap(i, nextIdx);
      i = nextIdx;
    }
    return result;
  };

  swap = (a, b) => {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  };
}

const countArr = new Array(N + 1).fill(0);
const adjArr = Array.from({ length: N + 1 }, () => new Array());

for (let i = 0; i < M; i++) {
  const [front, end] = input[i];

  adjArr[front].push(end);
  countArr[end] += 1;
}

const queue = new MinHeap();
for (let i = 1; i <= N; i++) {
  if (!countArr[i]) queue.push(i);
}

let idx = 0;
const answer = [];
while (queue.heap.length) {
  const cur = queue.pop();
  answer.push(cur);
  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];

    countArr[next] -= 1;

    if (countArr[next] === 0) queue.push(next);
  }
}
console.log(answer);
