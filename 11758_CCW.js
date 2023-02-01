//외적 이용하는 알고리즘

const [[x1, y1], [x2, y2], [x3, y3]] = `1 1
7 3
5 5`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const outer = x1 * y2 + x2 * y3 + x3 * y1 - x2 * y1 - x3 * y2 - x1 * y3;

if (outer > 0) {
  console.log(1);
  return;
} else if (outer < 0) {
  console.log(-1);
  return;
} else {
  console.log(0);
  return;
}
