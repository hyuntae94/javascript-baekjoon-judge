const [[N], input] = `19
0 1 2 1 3 4 3 5 3 1 6 1 0 7 8 7 9 7 0`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const parentNodes = [];
const visited = new Set();

parentNodes[input[0]] = -1;
visited.add(input[0]);
for (let i = 0; i < input.length; i++) {
  if (visited.has(input[i])) continue;

  parentNodes[input[i]] = input[i - 1];
  visited.add(input[i]);
}
console.log(visited.size);
console.log(parentNodes.join(" "));
