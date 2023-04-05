const [[N], [M], ...input] = `5
8
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
1 5`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [start, end] = input.pop();
const dist = new Array(N + 1).fill(Infinity);
const visited = new Array(N + 1).fill(0);
const adjArr = Array.from({ length: N + 1 }, () => new Array());
const route = new Array(N + 1).fill(0);

for (let i = 0; i < M; i++) {
  const [from, to, cost] = input[i];

  adjArr[from].push([to, cost]);
}

dist[start] = 0;
visited[start] = 1;

const queue = [start];
let idx = 0;

const findNext = () => {
  let min = Number.MAX_SAFE_INTEGER;
  let answer = -1;

  for (let i = 1; i <= N; i++) {
    if (!visited[i] && dist[i] < min) {
      min = dist[i];
      answer = i;
    }
  }
  return answer;
};

let from = start;
while (1) {
  for (let i = 0; i < adjArr[from].length; i++) {
    const [to, cost] = adjArr[from][i];

    if (!visited[to]) {
      if (dist[to] > dist[from] + cost) {
        dist[to] = dist[from] + cost;
        route[to] = from;
      }
    }
  }

  const nextV = findNext();
  if (nextV === -1) break;
  visited[nextV] = 1;
  from = nextV;
}

let tmp = end;
let count = 1;
const answer = [end];
while (1) {
  answer.push(route[tmp]);
  count += 1;
  tmp = route[tmp];
  if (!route[tmp]) break;
}
console.log(dist[end] + "\n" + count + "\n" + answer.reverse().join(" "));
