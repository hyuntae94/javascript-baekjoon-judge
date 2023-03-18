const [[TC], ...inputs] = `2
3 3 1
1 2 2
1 3 4
2 3 1
3 1 3
3 2 1
1 2 3
2 3 4
3 1 8`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

for (let i = 0; i < TC; i++) {
  const [N, M, W] = inputs.shift();
  const road = inputs.splice(0, M);
  const holl = inputs.splice(0, W);
  const adjArr = [];

  for (let i = 0; i < M; i++) {
    const [from, to, cost] = road[i];

    adjArr.push([from, to, cost]);
    adjArr.push([to, from, cost]);
  }
  for (let i = 0; i < W; i++) {
    const [from, to, cost] = holl[i];

    adjArr.push([from, to, -cost]);
  }
  //   console.log(adjArr);

  const dist = new Array(N + 1).fill(-1);
  dist[1] = 0;
  let flag = 0;
  for (let i = 1; i <= N - 1; i++) {
    for (let j = 0; j < adjArr.length; j++) {
      const [from, to, cost] = adjArr[j];

      if (dist[from] === Infinity) continue;
      if (dist[to] > dist[from] + cost) dist[to] = dist[from] + cost;
    }
  }

  for (let i = 0; i < adjArr.length; i++) {
    const [from, to, cost] = adjArr[i];

    if (dist[from] === Infinity) continue;
    if (dist[to] > dist[from] + cost) {
      flag = 1;
      break;
    }
  }
  flag ? console.log("YES") : console.log("NO");
}
