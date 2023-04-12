const inputs = `5
3 3 5 4 3
5
1 1
2 1
11 3
1000 4
5 1`
  .toString()
  .trim()
  .split("\n");

const m = +inputs[0];
const mArr = inputs[1].split(" ").map(Number);
const Q = +inputs[2];
const query = inputs.slice(3).map((el) => el.split(" ").map(Number));

const max_log = 20;
const table = Array.from({ length: max_log + 1 }, () =>
  new Array(m + 1).fill(0)
);
const f = new Array(m + 1).fill(0);

const init = () => {
  for (let i = 1; i <= m; i++) {
    f[i] = mArr[i - 1];
    table[0][i] = f[i];
  }
  //   console.log(f);
  //   console.log(table);

  for (let i = 1; i < max_log; i++) {
    for (let j = 1; j <= m; j++) {
      let tmp = table[i - 1][j];
      table[i][j] = table[i - 1][tmp];
    }
  }
};

const solve = (n, x) => {
  let cur = x;
  for (let i = 0; i < max_log; i++) {
    if (n & (1 << i)) {
      cur = table[i][cur];
    }
  }
  return cur;
};

const solution = () => {
  const answer = [];

  for (let [n, x] of query) {
    answer.push(solve(n, x));
  }
  console.log(answer.join("\n"));
};
init();
solution();
