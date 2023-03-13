const [[V, E], [start], ...input] = `5 6
1
5 1 1
1 2 2
1 3 3
2 3 4
2 4 5
3 4 6`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

class MinHeap {
  constructor() {
    this.heap = [];
  }
  push(node, weight) {
    this.heap.push({ node, weight });
    if (this.heap.length === 1) return;
    let curIdx = this.heap.length - 1;
    let parentIdx = parseInt((curIdx - 1) / 2);
    while (
      curIdx > 0 &&
      this.heap[parentIdx].weight > this.heap[curIdx].weight
    ) {
      this.swap(curIdx, parentIdx);
      curIdx = parentIdx;
      parentIdx = parseInt((curIdx - 1) / 2);
    }
  }
  pop() {
    if (this.heap.length === 0) return -1;
    if (this.heap.length === 1) return this.heap.pop();
    const answer = this.heap[0];
    this.heap[0] = this.heap.pop();

    let pos = 0;

    while (1) {
      let cur = pos;
      let leftIdx = cur * 2 + 1;
      let rightIdx = cur * 2 + 2;
      if (leftIdx > this.heap.length - 1) break;

      if (this.heap[cur].weight > this.heap[leftIdx].weight) cur = leftIdx;
      if (
        rightIdx < this.heap.length &&
        this.heap[cur].weight > this.heap[rightIdx].weight
      )
        cur = rightIdx;

      if (cur === pos) break;
      this.swap(pos, cur);
      pos = cur;
    }

    return answer;
  }
  swap(a, b) {
    const tmp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = tmp;
  }
}

const heap = new MinHeap();
const visited = new Array(V + 1).fill(0);
const distance = new Array(V + 1).fill(Infinity);
const adjArr = Array.from({ length: V + 1 }, () => new Array());

for (let i = 0; i < E; i++) {
  const [from, to, dis] = input[i];
  adjArr[from].push({ to, dis });
}

distance[start] = 0;
heap.push(start, 0);

while (heap.heap.length) {
  const { node, weight } = heap.pop();
  visited[node] = 1;

  for (let i = 0; i < adjArr[node].length; i++) {
    const { to, dis } = adjArr[node][i];
    if (!visited[to]) {
      if (distance[to] > weight + dis) {
        distance[to] = weight + dis;
        heap.push(to, distance[to]);
      }
    }
  }
}
let answer = "";
for (let i = 1; i <= V; i++) {
  if (distance[i] === Infinity) answer += "INF\n";
  else answer += `${distance[i]}\n`;
}
console.log(answer);
// const distance = new Array(V + 1).fill(Infinity);
// const visited = new Array(V + 1).fill(0);
// const adjArr = Array.from({ length: V + 1 }, () => new Array());

// for (let i = 0; i < E; i++) {
//   const [from, to, weight] = input[i];
//   adjArr[from].push([to, weight]);
// }
// distance[start] = 0;
// visited[start] = 1;

// let next = start;

// const findNextV = () => {
//   let min = Infinity;
//   let minV = null;

//   for (let i = 1; i <= V; i++) {
//     if (!visited[i]) {
//       if (distance[i] < min) {
//         min = distance[i];
//         minV = i;
//       }
//     }
//   }

//   if (!minV) return -1;
//   else return minV;
// };

// while (1) {
//   const cur = next;

//   for (let i = 0; i < adjArr[cur].length; i++) {
//     const [to, dis] = adjArr[cur][i];
//     if (!visited[to]) {
//       if (distance[to] > distance[cur] + dis)
//         distance[to] = distance[cur] + dis;
//     }
//   }

//   const vaild = findNextV();
//   if (vaild === -1) break;
//   next = vaild;
//   visited[next] = 1;
// }
// let answer = "";
// for (let i = 1; i <= V; i++) {
//   if (distance[i] === Infinity) answer += "INF\n";
//   else answer += `${distance[i]}\n`;
// }
// console.log(answer);
