const [[K], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const visited = new Array(K + 1).fill(0);
const adjArr = Array.from({ length: K + 1 }, () => new Array());
input.forEach((el) => {
  const [from, to] = el;
  adjArr[from].push(to);
  adjArr[to].push(from);
});
let answer = 0;
const dfs = (node, depth) => {
  if (node !== 1 && adjArr[node].length === 1) {
    if (depth % 2 === 1) answer += 1;
    return;
  }

  visited[node] = 1;

  for (let i = 0; i < adjArr[node].length; i++) {
    if (!visited[adjArr[node][i]]) {
      dfs(adjArr[node][i], depth + 1);
    }
  }
};

dfs(1, 0);
answer % 2 === 1 ? console.log("Yes") : console.log("No");
