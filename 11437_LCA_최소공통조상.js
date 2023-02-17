let [[N], ...input] = `15
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

const nodeArr = input.splice(0, N - 1);
const [[M], ...apexs] = input;
const adjArr = Array.from({ length: N + 1 }, () => new Array());
const visited = new Array(N + 1).fill(0);
const parents = new Array(N + 1).fill(0); //해당 노드의 부모노드 저장
const depths = new Array(N + 1).fill(0); // 해당 노드의 깊이

nodeArr.forEach((node) => {
  const [from, to] = node;
  adjArr[from].push(to);
  adjArr[to].push(from);
});

const queue = [1];
let idx = 0;
visited[1] = 1;
while (idx < queue.length) {
  const cur = queue[idx++];

  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];
    if (!visited[next]) {
      depths[next] = depths[cur] + 1; //인접노드 깊이 + 1
      parents[next] = cur;
      visited[next] = 1;
      queue.push(next);
    }
  }
}

// console.log("parent : ", parents);
// console.log("depths : ", depths);

const LCA = (u, v) => {
  //둘 중 깊은 노드
  let [a, b] = [Math.min(u, v), Math.max(u, v)];

  while (depths[a] !== depths[b]) b = parents[b];

  while (a !== b) {
    a = parents[a];
    b = parents[b];
  }
  return a;
};

const answer = [];

for (let i = 0; i < M; i++) {
  answer.push(LCA(apexs[i][0], apexs[i][1]));
}

console.log(answer.join("\n"));
