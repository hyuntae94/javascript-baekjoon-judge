const [[V], ...graph] = `7
0 0 0 1 0 0 0
0 0 0 0 0 0 1
0 0 0 0 0 0 0
0 0 0 0 1 1 0
1 0 0 0 0 0 0
0 0 0 0 0 0 1
0 0 1 0 0 0 0`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const adjArr = Array.from({ length: V }, () => new Array());
const visited = new Array(V).fill(0);
const answer = [];
for (let i = 0; i < V; i++) {
  for (let j = 0; j < V; j++) {
    if (graph[i][j]) adjArr[i].push(j);
  }
}

const visitedMemset = () => {
  for (let i = 0; i < V; i++) {
    visited[i] = 0;
  }
};

const dfs = (node) => {
  for (let i = 0; i < adjArr[node].length; i++) {
    const next = adjArr[node][i];
    if (!visited[next]) {
      visited[next] = 1;
      dfs(next);
    }
  }
};

for (let i = 0; i < V; i++) {
  visitedMemset();
  dfs(i);
  answer.push(visited.join(" "));
}

console.log(answer.join("\n"));
