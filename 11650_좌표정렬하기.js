const [[N], ...input] = `5
3 4
1 1
1 -1
2 2
3 3`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

const answer = [];
for (let i = 0; i < N; i++) {
  answer.push(input[i].join(" "));
}
console.log(answer.join("\n"));
