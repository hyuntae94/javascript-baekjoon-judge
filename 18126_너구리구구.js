const [[N], ...input] = `9
1 2 4
2 4 5
2 5 30
4 8 7
4 9 9
1 3 2
3 6 1
3 7 22`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// console.log(N, input);

if (N === 1) {
  console.log(0);
  return;
}

const visited = new Array(N + 1).fill(0);
const adjNode = Array.from({ length: N + 1 }, () => new Array());

input.forEach((e) => {
  const [from, to, len] = e;
  adjNode[from].push([to, len]);
  adjNode[to].push([from, len]);
});
// console.log(adjNode);

let answer = Number.MIN_SAFE_INTEGER;

const dfs = (node, move) => {
  if (node !== 1 && adjNode[node].length === 1) {
    answer = Math.max(answer, move);
    return;
  }
  for (let i = 0; i < adjNode[node].length; i++) {
    const [nextNode, nextMove] = [adjNode[node][i][0], adjNode[node][i][1]];

    if (!visited[node]) {
      visited[node] = 1;
      dfs(nextNode, move + nextMove);
      visited[node] = 0;
    }
  }
};

dfs(1, 0);
console.log(answer);
