const [[N, Q], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? el.split(" ").map(Number) : +el));
// console.log(N, Q, input);
const visited = new Array(N + 1).fill(0);
const answer = [];
input.forEach((duck) => {
  let flag = 0;
  let tmp = duck;
  while (tmp !== 1) {
    if (visited[tmp]) {
      flag = tmp;
    }

    tmp = parseInt(tmp / 2);
  }
  if (flag === 0) {
    visited[duck] = 1;
    answer.push(0);
  } else answer.push(flag);
});

console.log(answer.join("\n"));
