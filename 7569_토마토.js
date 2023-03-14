const [[N, M, H], ...input] = `4 3 2
1 1 1 1
1 1 1 1
1 1 1 1
1 1 1 1
-1 -1 -1 -1
1 1 1 -1`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const boxes = [];
const visited = [];
for (let i = 0; i < input.length; i += M) {
  boxes.push(input.slice(i, i + M));
}
for (let i = 0; i < H; i++) {
  visited.push(Array.from({ length: M }, () => new Array(N).fill(0)));
}
const dh = [0, 0, 0, 0, 1, -1];
const dr = [-1, 0, 1, 0, 0, 0];
const dc = [0, 1, 0, -1, 0, 0];

const check = (h, r, c) => {
  if (
    h >= 0 &&
    h < H &&
    r >= 0 &&
    r < M &&
    c >= 0 &&
    c < N &&
    boxes[h][r][c] === 0 &&
    !visited[h][r][c]
  )
    return true;
  return false;
};

const queue = [];
let flag = 0;

for (let height = 0; height < H; height++) {
  for (let row = 0; row < M; row++) {
    for (let col = 0; col < N; col++) {
      if (boxes[height][row][col] === 1) queue.push([height, row, col, 0]);
      if (boxes[height][row][col] === 0) flag = 1;
    }
  }
}

if (!flag) {
  console.log(0);
  return;
}

let max = Number.MIN_SAFE_INTEGER;

let idx = 0;
while (idx < queue.length) {
  const [curH, curR, curC, step] = queue[idx++];

  for (let k = 0; k < 6; k++) {
    const [nextH, nextR, nextC, nextStep] = [
      curH + dh[k],
      curR + dr[k],
      curC + dc[k],
      step + 1,
    ];

    if (check(nextH, nextR, nextC)) {
      queue.push([nextH, nextR, nextC, nextStep]);
      visited[nextH][nextR][nextC] = 1;
      max = Math.max(nextStep, max);
    }
  }
}

for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    for (let k = 0; k < N; k++) {
      if (boxes[i][j][k] === 0 && !visited[i][j][k]) {
        console.log(-1);
        return;
      }
    }
  }
}

console.log(max);
