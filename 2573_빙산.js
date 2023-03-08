let [[N, M], ...map] = `5 7
0 0 0 0 0 0 0
0 4 2 2 4 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0
0 0 0 0 0 0 0`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

let copyMap = JSON.parse(JSON.stringify(map));
const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];
const queue = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] !== 0) queue.push([i, j, map[i][j], 0]);
  }
}

const checkMap = (param) => {
  const visited = Array.from({ length: N }, () => new Array(M).fill(0));

  const bfs = (row, col) => {
    visited[row][col] = 1;

    const queue = [[row, col]];
    let idx = 0;

    while (idx < queue.length) {
      const [curR, curC] = queue[idx++];

      for (let i = 0; i < 4; i++) {
        const [nextR, nextC] = [curR + dr[i], curC + dc[i]];

        if (
          nextR >= 0 &&
          nextC >= 0 &&
          nextR < N &&
          nextC < M &&
          param[nextR][nextC] !== 0 &&
          !visited[nextR][nextC]
        ) {
          visited[nextR][nextC] = 1;
          queue.push([nextR, nextC]);
        }
      }
    }
  };
  let count = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (param[i][j] !== 0 && !visited[i][j]) {
        count += 1;
        if (count >= 2) return true;
        bfs(i, j);
      }
    }
  }
  return false;
};

let idx1 = 0;
let year = 0;
while (idx1 < queue.length) {
  const [curRow, curCol, level, curYear] = queue[idx1++];
  //   console.log(queue);
  if (year !== curYear) {
    year = curYear;
    map = JSON.parse(JSON.stringify(copyMap));
    if (checkMap(map)) {
      console.log(year);
      return;
    }
  }

  let count = 0;
  for (let i = 0; i < 4; i++) {
    const [nextRow, nextCol] = [curRow + dr[i], curCol + dc[i]];

    if (
      nextRow >= 0 &&
      nextCol >= 0 &&
      nextRow < N &&
      nextCol < M &&
      map[nextRow][nextCol] === 0
    ) {
      count += 1;
      //   if (curRow === 1 && curCol === 3) console.log(nextRow, nextCol);
    }
  }
  //   console.log("curRow : ", curRow);
  //   console.log("curCol : ", curCol);
  //   console.log("count : ", count);
  const nextLevel = level - count;
  nextLevel > 0
    ? (copyMap[curRow][curCol] = nextLevel)
    : (copyMap[curRow][curCol] = 0);
  if (copyMap[curRow][curCol] !== 0)
    queue.push([curRow, curCol, copyMap[curRow][curCol], curYear + 1]);
}
console.log(0);
