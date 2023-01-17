const [N, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? Number(el) : el.split(" ").map(Number)));
let idx = 0;
while (idx < input.length) {
  let [N, M] = input[idx++];
  let arr = [];
  for (let i = 0; i < M; i++) {
    arr.push(input[idx++]);
  }
  main(N, arr);
}

function main(N, param) {
  //인접리스트
  const adjArr = Array.from({ length: N + 1 }, () => new Array());
  //방문체크리스트
  const visited = new Array(N + 1).fill(0);

  for (let [to, from] of param) {
    adjArr[to].push(from);
    adjArr[from].push(to);
  }
  let answer = 0;

  function dfs(city) {
    if (visited[city]) return;
    visited[city] = 1;
    answer += 1;

    for (let i = 0; i < adjArr[city].length; i++) {
      dfs(adjArr[city][i]);
    }
  }
  dfs(1);

  console.log(answer - 1);
}

// const fs = require("fs");

// const inputs = fs.readFileSync("/dev/stdin").toString().split("\n");
// let cursor = 0;

// const outputs = [];

// const t = Number(inputs[cursor++]);

// Array.from(Array(t), () => {
//     const [n, m] = inputs[cursor++].split(" ").map(Number);
//     cursor += m;

//     outputs.push(n - 1);
// });
