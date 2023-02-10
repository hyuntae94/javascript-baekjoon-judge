const [[N, M], ...inputs] = `18 3
001
100
100
000
011
010
100
100
010
010
010
110
101
101
000
110
000
110
001
100
011
000
100
010
011
100
101
101
010
001
010
010
111
110
111
001`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) =>
    idx === 0 ? el.split(" ").map(Number) : el.split("").map(Number)
  );

const A = inputs.slice(0, N);
const B = inputs.slice(N);
let answer = 0;

for (let i = 0; i < N - 2; i++) {
  for (let j = 0; j < M - 2; j++) {
    if (A[i][j] !== B[i][j]) {
      for (let k = i; k <= i + 2; k++) {
        for (let l = j; l <= j + 2; l++) {
          A[k][l] = 1 - A[k][l];
        }
      }
      answer += 1;
    } else continue;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (A[i][j] !== B[i][j]) {
      console.log(-1);
      return;
    }
  }
}

console.log(answer);
