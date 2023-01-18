const [[N], ...info] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

if (N === 1) return 0;

const adjArr = Array.from({ length: N + 1 }, () => new Array());

for (let i = 0; i < info.length; i++) {
  const [to, from, dist] = info[i];
  adjArr[to].push([from, dist]);
  adjArr[from].push([to, dist]);
}

function bfs(s) {
  const visited = new Array(N + 1).fill(0);
  const queue = [];
  queue.push([s, 0]);
  let max = { node: 0, dist: 0 };
  let idx = 0;
  while (idx < queue.length) {
    const [node, dist] = queue[idx++];
    if (visited[node]) continue;
    visited[node] = 1;
    if (max.dist < dist) max = { node, dist };
    for (let [nextNode, nextDist] of adjArr[node]) {
      queue.push([nextNode, dist + nextDist]);
    }
  }
  return max;
}
let answer = bfs(bfs(1).node).dist;
console.log(answer);
