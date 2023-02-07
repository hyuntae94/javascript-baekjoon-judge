const [[N], ...input] = `4
0 0
0 10
10 10
10 0`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const ccw = (x1, y1, x2, y2, x3, y3) => {
  let ret = null;

  ret = x1 * y2 + x2 * y3 + x3 * y1 - (x2 * y1 + x3 * y2 + x1 * y3);

  return ret / 2;
};

const main = () => {
  let answer = 0;

  for (let i = 1; i < N - 1; i++) {
    answer += ccw(
      input[0][0],
      input[0][1],
      input[i][0],
      input[i][1],
      input[i + 1][0],
      input[i + 1][1]
    );
  }

  console.log(Math.abs(answer).toFixed(1));
};

main();
