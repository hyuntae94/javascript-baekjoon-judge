const [[N, M], ...input] = `3 4
1 2 4
1 3 3
2 3 -1
3 1 -2`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const a = Infinity;
