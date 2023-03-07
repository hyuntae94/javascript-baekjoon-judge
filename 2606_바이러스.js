const [[V], [E], ...query] = `7
6
1 2
2 3
1 5
5 2
5 6
4 7`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const adjArr = Array.from({ length: V + 1 }, () => new Array());
const visited = new Array(V + 1).fill(0);

for (let i = 0; i < E; i++) {
  const [from, to] = query[i];
  adjArr[from].push(to);
  adjArr[to].push(from);
}

const queue = [1];
visited[1] = 1;
let answer = 0;
let idx = 0;

while (idx < queue.length) {
  const cur = queue[idx++];

  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];
    if (!visited[next]) {
      queue.push(next);
      visited[next] = 1;
      answer += 1;
    }
  }
}
console.log(answer);
