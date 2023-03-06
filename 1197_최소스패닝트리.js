const [[V, E], ...input] = `3 3
1 2 1
2 3 2
1 3 3`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const parent = new Array(V + 1).fill(null).map((_, idx) => idx);
// console.log(parent);
input.sort((a, b) => a[2] - b[2]);
// console.log(input);
const sameParent = (a, b) => {
  const aParent = findParent(a);
  const bParent = findParent(b);

  if (aParent === bParent) return true;
  return false;
};

const findParent = (param) => {
  if (parent[param] === param) return param;
  else return (parent[param] = findParent(parent[param]));
};

const union = (a, b) => {
  const aP = findParent(a);
  const bP = findParent(b);

  if (aP !== bP) {
    parent[aP] = bP;
  }
};

let answer = 0;

for (let i = 0; i < E; i++) {
  if (sameParent(input[i][0], input[i][1]) === false) {
    union(input[i][0], input[i][1]);
    answer += input[i][2];
  }
}

console.log(answer);
