const [[N], ...map] = `3
1 1 1
1 1 1
1 1 1`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const levels = new Set();
let answer = 1;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    levels.add(map[i][j]);
  }
}

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

const main = (high) => {
  const visited = Array.from({ length: N }, () => new Array(N).fill(0));

  const bfs = (r, c, high) => {
    const queue = [[r, c]];
    let idx = 0;

    while (idx < queue.length) {
      const [curR, curC] = queue[idx++];

      for (let i = 0; i < 4; i++) {
        const [nextR, nextC] = [curR + dr[i], curC + dc[i]];

        if (
          nextR >= 0 &&
          nextR < N &&
          nextC >= 0 &&
          nextC < N &&
          !visited[nextR][nextC] &&
          map[nextR][nextC] > high
        ) {
          visited[nextR][nextC] = 1;
          queue.push([nextR, nextC]);
        }
      }
    }
  };

  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] > high && !visited[i][j]) {
        bfs(i, j, high);
        count += 1;
      }
    }
  }
  if (count > answer) answer = count;
};

levels.forEach((high) => {
  main(high);
});
console.log(answer);
