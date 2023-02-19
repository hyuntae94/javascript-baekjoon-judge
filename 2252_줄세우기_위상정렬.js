//위상정렬은 일의 순서를 정하는 정렬
//각 학생마다 진입차수를 확인한다
//진입차수가 0인 학생을 큐에 넣고
//위 학생과 연결된 간선, 즉 연결된 학생의 차수를 -1 감소시키고
//진입차수가 0이 되었다면 큐에 삽입
//위 과정 반복
const [[N, M], ...input] = `4 4
1 3
1 2
2 4
2 3`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const countArr = new Array(N + 1).fill(0);
const adjArr = Array.from({ length: N + 1 }, () => new Array());

input.forEach((order) => {
  const [front, end] = order;

  countArr[end] += 1;
  adjArr[front].push(end);
});

const queue = [];
let idx = 0;
for (let i = 1; i <= N; i++) {
  if (countArr[i] === 0) queue.push(i);
}
while (idx < queue.length) {
  const cur = queue[idx++];
  for (let i = 0; i < adjArr[cur].length; i++) {
    const next = adjArr[cur][i];
    countArr[next] -= 1;

    if (countArr[next] === 0) queue.push(next);
  }
}

console.log(queue.join(" "));
