const [[N, M], ...matrix] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? el.split(" ").map(Number) : el.split("")));
const initalPos = [];

matrix.forEach((row, rI) => {
  row.forEach((_, cI) => {
    if (matrix[rI][cI] === "o") {
      initalPos.push([rI, cI]);
      matrix[rI][cI] = ".";
    }
  });
});
initalPos.push(0);
const queue = [initalPos];
const map = new Map();

const row = [-1, 0, 1, 0];
const col = [0, 1, 0, -1];
let idx = 0;
while (idx < queue.length) {
  const [[r1, c1], [r2, c2], step] = queue[idx++];

  //종료조건
  //1. 10번초과
  if (step > 10) {
    console.log(-1);
    return;
  }
  if (map.has(`${r1}${c1}${r2}${c2}`)) continue;
  else map.set(`${r1}${c1}${r2}${c2}`, true);

  for (let i = 0; i < 4; i++) {
    const [nextR1, nextC1, nextR2, nextC2] = [
      r1 + row[i],
      c1 + col[i],
      r2 + row[i],
      c2 + col[i],
    ];
    //2. 1번 동전만 밖에있는경우
    if (
      (nextR1 < 0 || nextR1 >= N || nextC1 < 0 || nextC1 >= M) &&
      nextR2 >= 0 &&
      nextR2 < N &&
      nextC2 >= 0 &&
      nextC2 < M
    ) {
      console.log(step + 1);
      return;
    }
    //3. 2번 동전만 밖에있는 경우
    else if (
      (nextR2 < 0 || nextR2 >= N || nextC2 < 0 || nextC2 >= M) &&
      nextR1 >= 0 &&
      nextR1 < N &&
      nextC1 >= 0 &&
      nextC1 < M
    ) {
      console.log(step + 1);
      return;
    }
    // 4. 1,2번 동전이 같이 밖에 나가는 경우
    else if (
      (nextR1 < 0 || nextR1 >= N || nextC1 < 0 || nextC1 >= M) &&
      (nextR2 < 0 || nextR2 >= N || nextC2 < 0 || nextC2 >= M) &&
      step + 1 > 10
    ) {
      console.log(-1);
      return;
    } else if (
      (nextR1 < 0 || nextR1 >= N || nextC1 < 0 || nextC1 >= M) &&
      (nextR2 < 0 || nextR2 >= N || nextC2 < 0 || nextC2 >= M)
    )
      continue;
    //빈공간일경우
    else if (matrix[nextR1][nextC1] === "." && matrix[nextR2][nextC2] === ".") {
      queue.push([[nextR1, nextC1], [nextR2, nextC2], step + 1]);
    }
    //벽인경우
    else if (matrix[nextR1][nextC1] === "#" && matrix[nextR2][nextC2] === ".") {
      queue.push([[r1, c1], [nextR2, nextC2], step + 1]);
    } else if (
      matrix[nextR1][nextC1] === "." &&
      matrix[nextR2][nextC2] === "#"
    ) {
      queue.push([[nextR1, nextC1], [r2, c2], step + 1]);
    } else if (
      matrix[nextR1][nextC1] === "#" &&
      matrix[nextR2][nextC2] === "#" &&
      step + 1 > 10
    ) {
      console.log(-1);
      return;
    } else if (matrix[nextR1][nextC1] === "#" && matrix[nextR2][nextC2] === "#")
      continue;
  }
}
console.log(-1);
