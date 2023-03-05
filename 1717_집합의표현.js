const [[N, M], ...input] = `7 8
0 1 3
1 1 7
0 7 6
1 7 1
0 3 7
0 4 2
0 1 1
1 1 1`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const array = new Array(N + 1).fill(null).map((_, idx) => idx);
const answer = [];
const find = (x) => {
  if (array[x] === x) return x;
  return (array[x] = find(array[x]));
};

const union = (a, b) => {
  const pa = find(a);
  const pb = find(b);

  array[pa] = pb;
};

for (let i = 0; i < M; i++) {
  const [flag, a, b] = input[i];

  if (flag === 0) {
    union(a, b);
  } else {
    if (find(a) === find(b)) answer.push("YES");
    else answer.push("NO");
  }
}
console.log(answer.join("\n"));
