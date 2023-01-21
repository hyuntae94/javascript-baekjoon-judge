const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N] = input[0];
const [q] = input[N];
let answer = [];
const adjNodes = Array.from({ length: N + 1 }, () => new Array());
for (let i = 1; i < N; i++) {
  const [from, to] = input[i];
  adjNodes[from].push(to);
  adjNodes[to].push(from);
}
for (let i = N; i < input.length; i++) {
  const [t, k] = input[i];
  if (t === 1) {
    if (adjNodes[k].length > 1) {
      answer.push("yes");
      continue;
    }
    answer.push("no");
  } else if (t === 2) {
    answer.push("yes");
  }
}
console.log(answer.join("\n"));
