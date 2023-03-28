const [[N, M], ...input] = `3 2
1 2 4
1 2 3`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const dist = new Array(N + 1).fill(Infinity);

const bellman_ford = () => {
  dist[1] = 0;

  for (let i = 1; i <= N - 1; i++) {
    for (let j = 0; j < M; j++) {
      const [from, to, cost] = input[j];

      if (dist[from] === Infinity) continue;
      if (dist[to] > dist[from] + cost) dist[to] = dist[from] + cost;
    }
  }

  for (let i = 0; i < M; i++) {
    const [from, to, cost] = input[i];

    if (dist[from] === Infinity) continue;
    if (dist[to] > dist[from] + cost) {
      console.log(-1);
      return;
    }
  }

  const answer = [];
  for (let i = 2; i < dist.length; i++) {
    dist[i] === Infinity ? answer.push(-1) : answer.push(dist[i]);
  }
  console.log(answer.join("\n"));
};

bellman_ford();
