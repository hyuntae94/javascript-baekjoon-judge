const [[N], ...input] = `5
0 4
1 2
1 -1
2 2
3 3`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});
const answer = [];
input.forEach((el) => {
  answer.push(el.join(" "));
});
console.log(answer.join("\n"));
