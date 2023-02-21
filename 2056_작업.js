const [[N], ...input] = `7
5 0
6 1 1
3 1 2
1 1 1
8 2 2 4
1 2 2 4
4 3 3 5 6`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
// console.log(N, input)

const adjArr = Array.from({ length: N + 1 }, () => new Array());
const countArr = new Array(N + 1).fill(0);
const timeTable = new Array(N + 1).fill(0);
const answer = new Array(N + 1).fill(Number.MIN_SAFE_INTEGER);

for (let i = 0; i < N; i++) {
  const [time, adjCount, ...adjNode] = input[i];
  //   console.log(time, adjCount, adjNode);
  timeTable[i + 1] = time;
  for (let j = 0; j < adjNode.length; j++) {
    adjArr[adjNode[j]].push(i + 1);
  }
  countArr[i + 1] = adjCount;
}

const queue = [];

for (let i = 1; i <= N; i++) {
  if (!countArr[i]) {
    answer[i] = timeTable[i];
    queue.push(i);
  }
}

let idx = 0;
while (idx < queue.length) {
  const cur = queue[idx++];

  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];

    countArr[next] -= 1;
    answer[next] = Math.max(answer[cur] + timeTable[next], answer[next]);
    // ret = Math.max(ret, answer[next]);
    if (countArr[next] === 0) queue.push(next);
  }
}
console.log(Math.max(...answer));
