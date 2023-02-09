const input = `7
1 6 13
6 3 9
3 5 7
4 1 3
2 4 20
4 7 2
3
1 6
1 4
2 6`
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const nodeDistances = input.slice(1, N).map((el) => el.split(" ").map(Number));
const M = +input[N];
const pairsNodes = input.slice(N + 1).map((el) => el.split(" ").map(Number));
// console.log(N, M, nodeDistances, pairsNodes);

const adjArr = Array.from({ length: N + 1 }, () => new Array());
const parentsNodes = new Array(N + 1).fill(0);

nodeDistances.forEach((el) => {
  const [from, to, distance] = el;

  adjArr[from].push([to, distance]);
  adjArr[to].push([from, distance]);
});

const visited = new Array(N + 1).fill(0);
const depth = new Array(N + 1).fill(0);
const weights = new Array(N + 1).fill(0);
visited[1] = 1;
const queue = [[1, 0]];
let idx = 0;
while (idx < queue.length) {
  const [cur, depths] = queue[idx++];

  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];
    if (!visited[next[0]]) {
      visited[next[0]] = 1;
      parentsNodes[next[0]] = cur;
      weights[next[0]] = weights[cur] + next[1];
      queue.push([next[0], depths + 1]);
      depth[next[0]] = depths + 1;
    }
  }
}
// console.log(parentsNodes);
// console.log(depth);
// console.log(weights);

const answer = [];

pairsNodes.forEach((el) => {
  let [a, b] = el;
  if (depth[a] < depth[b]) {
    let tmp = b;
    b = a;
    a = tmp;
  }
  while (depth[a] !== depth[b]) {
    a = parentsNodes[a];
  }

  while (a !== b) {
    a = parentsNodes[a];
    b = parentsNodes[b];
  }

  answer.push(weights[el[0]] + weights[el[1]] - 2 * weights[a]);
});
console.log(answer.join("\n"));
