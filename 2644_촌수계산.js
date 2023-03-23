const [[N], [start, end], [K], ...querys] = `9
7 3
7
1 2
1 3
2 7
2 8
2 9
4 5
4 6`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const adjArr = Array.from({ length: N + 1 }, () => new Array());
const visited = new Array(N + 1).fill(0);

for (let i = 0; i < K; i++) {
  const [from, to] = querys[i];
  adjArr[from].push(to);
  adjArr[to].push(from);
}

const queue = [[start, 0]];
visited[start] = 1;
let idx = 0;
let ans = -1;
while (idx < queue.length) {
  const [cur, step] = queue[idx++];
  if (cur === end) {
    ans = step;
    break;
  }

  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];
    if (!visited[next]) {
      visited[next] = 1;
      queue.push([next, step + 1]);
    }
  }
}

console.log(ans);
