const [[N, B], ...A] = `2 5
1 2
3 4`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) =>
    idx === 0
      ? el.split(" ").map(Number)
      : el.split(" ").map((el) => Number(el % 1000))
  );

const cal = (array1, array2) => {
  const tmp = Array.from({ length: N }, () => new Array(N).fill(0));
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        tmp[i][j] += array1[i][k] * array2[k][j];
      }
      tmp[i][j] %= 1000;
    }
  }
  return tmp;
};

const main = (exp) => {
  if (exp === 1) return A;

  const matrix = main(parseInt(exp / 2));

  const tmp = cal(matrix, matrix);
  if (exp % 2 === 1) {
    return cal(tmp, A);
  }
  return tmp;
};
const answer = main(B);
for (let i = 0; i < N; i++) {
  console.log(answer[i].join(" "));
}
