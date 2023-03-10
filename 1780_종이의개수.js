const [[N], ...input] = `9
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
0 0 0 1 1 1 -1 -1 -1
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
1 1 1 0 0 0 0 0 0
0 1 -1 0 1 -1 0 1 -1
0 -1 1 0 1 -1 0 1 -1
0 1 -1 1 0 -1 0 1 -1`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = [0, 0, 0];

const check = (row, col, num) => {
  const start = input[row][col];

  for (let i = row; i < row + num; i++) {
    for (let j = col; j < col + num; j++) {
      if (start !== input[i][j]) {
        return false;
      }
    }
  }
  return true;
};

const dfs = (row, col, num) => {
  if (check(row, col, num)) {
    answer[input[row][col] + 1] += 1;
  } else {
    const divide = num / 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        dfs(row + divide * i, col + divide * j, divide);
      }
    }
  }
};

dfs(0, 0, N);
console.log(answer.join("\n"));
