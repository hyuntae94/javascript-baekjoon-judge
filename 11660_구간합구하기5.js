const [[N, M], ...input] = `4 3
1 2 3 4
2 3 4 5
3 4 5 6
4 5 6 7
2 2 3 4
3 4 3 4
1 1 4 4`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const p_sum = Array.from({ length: N + 1 }, () => new Array(N + 1).fill(0));
const p = input.slice(N);
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    let number = input[i][j];
    p_sum[i + 1][j + 1] =
      p_sum[i][j + 1] + p_sum[i + 1][j] - p_sum[i][j] + number;
  }
}

const answer = [];

for (const [r1, c1, r2, c2] of p) {
  const sum =
    p_sum[r2][c2] -
    p_sum[r1 - 1][c2] -
    p_sum[r2][c1 - 1] +
    p_sum[r1 - 1][c1 - 1];
  answer.push(sum);
}
console.log(answer.join("\n"));
