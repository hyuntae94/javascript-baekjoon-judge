const [[V], [E], ...input] = `5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [start, end] = input.pop();

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push = (param) => {
    this.heap.push(param);
    if (this.heap.length === 1) return;
    let curIdx = this.heap.length - 1;
    let parentIdx = parseInt((curIdx - 1) / 2);
    while (curIdx > 0 && this.heap[parentIdx][1] > this.heap[curIdx][1]) {
      this.swap(parentIdx, curIdx);
      curIdx = parentIdx;
      parentIdx = parseInt((curIdx - 1) / 2);
    }
  };

  pop = () => {
    if (this.heap.length === 1) return this.heap.pop();

    const answer = this.heap[0];
    this.heap[0] = this.heap.pop();

    let curIdx = 0;
    while (1) {
      const leftIdx = curIdx * 2 + 1;
      const rightIdx = curIdx * 2 + 2;
      if (leftIdx >= this.heap.length) break;

      let tmp = curIdx;
      if (this.heap[leftIdx][1] < this.heap[tmp][1]) tmp = leftIdx;
      if (
        rightIdx < this.heap.length &&
        this.heap[tmp][1] > this.heap[rightIdx][1]
      )
        tmp = rightIdx;

      if (tmp === curIdx) break;

      this.swap(curIdx, tmp);
      curIdx = tmp;
    }
    return answer;
  };

  swap = (a, b) => {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  };
}

const queue = new MinHeap();

const adjArr = Array.from({ length: V + 1 }, () => new Array());

for (let i = 0; i < E; i++) {
  const [from, to, dist] = input[i];
  adjArr[from].push([to, dist]);
}
const visited = new Array(V + 1).fill(0);
const distance = new Array(V + 1).fill(Infinity);
distance[start] = 0;
queue.push([start, 0]);

while (queue.heap.length) {
  console.log(queue.heap);
  const [cur, dist] = queue.pop();

  if (!visited[cur]) {
    visited[cur] = 0;
    for (let i = 0; i < adjArr[cur].length; i++) {
      const [next, val] = adjArr[cur][i];

      if (distance[next] > distance[cur] + val) {
        distance[next] = distance[cur] + val;
        queue.push([next, distance[next]]);
      }
    }
  }
}
console.log(distance[end]);
