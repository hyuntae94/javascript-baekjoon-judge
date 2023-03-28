const [[N], [M], ...paths] = `5
14
1 2 2
1 3 3
1 4 1
1 5 10
2 4 2
3 4 1
3 5 1
4 5 3
3 5 10
3 1 8
1 4 2
5 1 7
3 4 2
5 2 4`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = Array.from({ length: N }, () => new Array(N).fill(Infinity));

for (let i = 0; i < M; i++) {
  const [from, to, value] = paths[i];

  if (answer[from - 1][to - 1] > value) {
    answer[from - 1][to - 1] = value;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (i === j) answer[i][j] = 0;
  }
}

for (let k = 0; k < N; k++) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (answer[i][k] + answer[k][j] < answer[i][j]) {
        answer[i][j] = answer[i][k] + answer[k][j];
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (answer[i][j] === Infinity) answer[i][j] = 0;
  }
}
console.log(answer.map((el) => el.join(" ")).join("\n"));
