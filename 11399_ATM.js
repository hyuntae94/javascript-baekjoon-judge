const [[N], input] = `5
3 1 4 3 2`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.sort((a, b) => a - b);
let answer = 0;
input.reduce((prev, cur, idx) => {
  if (idx !== 0) {
    const sum = prev[idx - 1] + cur;
    prev.push(sum);
    answer += sum;
    return prev;
  }
  prev.push(cur);
  answer += cur;
  return prev;
}, []);

console.log(answer);
