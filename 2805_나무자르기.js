const [[N, M], input] = `5 20
4 42 40 26 46`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const max = Math.max(...input);
const findMaxHeight = (mid) => {
  let sum = 0;
  for (let i = 0; i < N; i++) {
    if (input[i] >= mid) sum += input[i] - mid;
  }
  if (sum >= M) {
    answer = mid;
    return true;
  } else return false;
};

const halfSearch = (start, end) => {
  const mid = parseInt((start + end) / 2);
  if (start === end) return;

  if (findMaxHeight(mid)) halfSearch(mid + 1, end);
  else halfSearch(start, mid);
};

halfSearch(0, max);
console.log(answer);
