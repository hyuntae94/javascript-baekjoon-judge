class Heap {
  constructor() {
    this.items = [];
  }
  swap(idx1, idx2) {
    [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
  }
  findParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  findLeftChildIdx(idx) {
    return 2 * idx + 1;
  }
  findRightChildIdx(idx) {
    return 2 * idx + 2;
  }
  findParent(idx) {
    return this.items[this.findParentIdx(idx)];
  }
  findLeftChild(idx) {
    return this.items[this.findLeftChildIdx(idx)];
  }
  findRightChild(idx) {
    return this.items[this.findRightChildIdx(idx)];
  }
  size() {
    return this.items.length;
  }
}

class MinHeap extends Heap {
  bubbleUp() {
    let idx = this.size() - 1;
    //가장아래에있는 원소를 매번 부모의 우선순위와 비교하여 우선순위가 더 빠르다면 바꿔준다.
    //언제까지?? 부모원소가 있고 부모 원소보다 우선순위가 더 빠른 경우만
    while (
      this.findParent(idx) &&
      this.findParent(idx)[1] > this.items[idx][1]
    ) {
      this.swap(idx, this.findParentIdx(idx));
      idx = this.findParentIdx(idx);
    }
  }
  bubbleDown() {
    let index = 0;

    while (
      (this.findLeftChild(index) &&
        this.findLeftChild(index)[1] < this.items[index][1]) ||
      (this.findRightChild(index) &&
        this.findRightChild(index[1] < this.items[index][1]))
    ) {
      let smallerIdx = this.findLeftChildIdx(index);

      if (
        this.findRightChild(index) &&
        this.findRightChild(index)[1] < this.items[smallerIdx][1]
      ) {
        smallerIdx = this.findRightChildIdx(index);
      }

      this.swap(index, smallerIdx);
      index = smallerIdx;
    }
  }

  add(item) {
    this.items.push(item);
    this.bubbleUp();
  }
  poll() {
    if (this.size() === 1) {
      return this.items.pop();
    }

    const value = this.items[0];
    this.items[0] = this.items.pop();
    this.bubbleDown();

    return value;
  }
}

function solution(n, paths, gates, summits) {
  const isSummits = new Array(n + 1).fill(false);

  summits.forEach((summit) => {
    isSummits[summit] = true;
  });

  const MAX = 10000001;
  const answer = [n, MAX];
  const hikingTrail = Array.from({ length: n + 1 }, () => []);

  summits.sort((a, b) => a - b);

  paths.forEach((path) => {
    const [i, j, w] = path;

    hikingTrail[i].push([j, w]);
    hikingTrail[j].push([i, w]);
  });

  function dijkstra() {
    const minHeap = new MinHeap();
    const intensity = Array(n + 1).fill(MAX);

    // 모든 출발지에서 시작해준다.
    gates.forEach((gate) => {
      minHeap.add([gate, 0]);
      intensity[gate] = 0;
    });

    while (minHeap.size()) {
      const [vertex, cost] = minHeap.poll();

      if (intensity[vertex] < cost) continue;

      if (isSummits[vertex]) continue;

      const adjList = hikingTrail[vertex];
      const adjListLen = adjList.length;

      for (let i = 0; i < adjListLen; i++) {
        const [nextVertex, nextCost] = adjList[i];

        if (intensity[nextVertex] > Math.max(intensity[vertex], nextCost)) {
          intensity[nextVertex] = Math.max(intensity[vertex], nextCost);
          minHeap.add([nextVertex, intensity[nextVertex]]);
        }
      }
    }
    summits.forEach((summit) => {
      if (intensity[summit] < answer[1]) {
        answer[0] = summit;
        answer[1] = intensity[summit];
      }
    });
  }
  dijkstra();
  console.log(answer);
}

solution(
  6,
  [
    [1, 2, 3],
    [2, 3, 5],
    [2, 4, 2],
    [2, 5, 4],
    [3, 4, 4],
    [4, 5, 3],
    [4, 6, 1],
    [5, 6, 1],
  ],
  [1, 3],
  [5]
);
