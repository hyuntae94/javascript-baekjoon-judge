const input = `5 3
5 4 3 2 1
1 3
2 4
5 5`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const [N, M] = input[0];
const array = input[1];
const pairNodes = input.slice(2);

const treeHeight = Math.ceil(Math.log2(N));
const treeSize = Math.pow(2, treeHeight + 1);
const segmentTree = new Array(treeSize).fill(null);

const makeSegmentTree = (node, start, end) => {
  if (start === end) return (segmentTree[node] = array[start - 1]);

  const mid = parseInt((start + end) / 2);
  const left = makeSegmentTree(node * 2, start, mid);
  const right = makeSegmentTree(node * 2 + 1, mid + 1, end);
  segmentTree[node] = left + right;
  return segmentTree[node];
};

makeSegmentTree(1, 1, N);

const rangeSum = (node, start, end, left, right) => {
  if (left > end || right < start) return 0;

  if (left <= start && end <= right) return segmentTree[node];

  const mid = parseInt((start + end) / 2);
  const leftTree = rangeSum(node * 2, start, mid, left, right);
  const rightTree = rangeSum(node * 2 + 1, mid + 1, end, left, right);

  return leftTree + rightTree;
};

const answer = [];
for (let i = 0; i < M; i++) {
  const [left, right] = pairNodes[i];
  answer.push(rangeSum(1, 1, N, left, right));
}
console.log(answer.join("\n"));
