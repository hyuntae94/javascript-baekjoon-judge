const [[N], [M], ...input] = `6
9
1 2 5
1 3 4
2 3 2
2 4 7
3 4 6
3 5 11
4 5 3
4 6 8
5 6 8`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
input.sort((a, b) => a[2] - b[2]);
// console.log(input);

const parent = new Array(N + 1).fill(null).map((_, idx) => idx);

const union = (a, b) => {
  const aParent = findParent(a);
  const bParent = findParent(b);

  if (aParent !== bParent) {
    parent[aParent] = bParent;
  }
};

const findParent = (a) => {
  if (parent[a] === a) return a;
  else return (parent[a] = findParent(parent[a]));
};

const isSameParent = (a, b) => {
  const aParent = findParent(a);
  const bParent = findParent(b);

  if (aParent === bParent) return true;
  return false;
};

let answer = 0;
for (let i = 0; i < M; i++) {
  if (isSameParent(input[i][0], input[i][1]) === false) {
    union(input[i][0], input[i][1]);
    answer += input[i][2];
  }
}

console.log(answer);
