const input = `15
1 2
1 3
2 4
3 7
6 2
3 8
4 9
2 5
5 11
7 13
10 4
11 15
12 5
14 7
6
6 11
10 9
2 6
7 6
8 13
8 15`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N] = input[0];
const edges = input.slice(1, N);
const [M] = input[N];
const wants = input.slice(N + 1);

const MAX = Math.ceil(Math.log2(100000)) + 1;
const parent = Array.from({ length: N + 1 }, () => new Array(MAX).fill(-1));
const depth = new Array(N + 1).fill(-1);
depth[1] = 0;

const adjArr = Array.from({ length: N + 1 }, () => new Array());

for (let i = 0; i < edges.length; i++) {
  const [from, to] = edges[i];

  adjArr[from].push(to);
  adjArr[to].push(from);
}

const queue = [1];
let idx = 0;

while (idx < queue.length) {
  const cur = queue[idx++];

  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];
    if (depth[next] === -1) {
      depth[next] = depth[cur] + 1;
      parent[next][0] = cur;
      queue.push(next);
    }
  }
}

for (let j = 0; j < MAX - 1; j++) {
  for (let i = 1; i <= N; i++) {
    if (parent[i][j] !== -1) {
      parent[i][j + 1] = parent[parent[i][j]][j];
    }
  }
}
const answer = [];
for (let i = 0; i < M; i++) {
  const [a, b] = wants[i];
  let deep = null;
  let shallow = null;

  if (depth[a] > depth[b]) {
    deep = a;
    shallow = b;
  } else {
    deep = b;
    shallow = a;
  }
  let diff = depth[deep] - depth[shallow];

  for (let i = 0; diff; i++) {
    if (diff % 2) deep = parent[deep][i];
    diff = parseInt(diff / 2);
  }
  if (deep !== shallow) {
    for (let i = MAX - 1; i >= 0; i--) {
      if (parent[deep][i] !== -1 && parent[deep][i] !== parent[shallow][i]) {
        deep = parent[deep][i];
        shallow = parent[shallow][i];
      }
    }
    answer.push(parent[deep][0]);
  } else {
    answer.push(deep);
  }
}
console.log(answer.join("\n"));
