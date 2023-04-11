const inputs = `5
5 4 3 2 1
6
2 1 3
2 1 4
1 5 3
2 3 5
1 4 3
2 3 5`
  .toString()
  .trim()
  .split("\n");

const N = +inputs[0];
const sequence = inputs[1].split(" ").map(Number);
const M = +inputs[2];
const query = inputs.slice(3).map((el) => el.split(" ").map(Number));

const treeHeight = Math.ceil(Math.log2(N));
const treeNodes = Math.pow(2, treeHeight + 1);
const segementTree = new Array(treeNodes).fill(null);

const makeSegementTree = (node, start, end) => {
  if (start === end) return (segementTree[node] = sequence[start - 1]);

  const mid = parseInt((start + end) / 2);
  const leftNode = makeSegementTree(node * 2, start, mid);
  const rightNode = makeSegementTree(node * 2 + 1, mid + 1, end);

  return (segementTree[node] = Math.min(leftNode, rightNode));
};

makeSegementTree(1, 1, N);

const findMinValue = (node, start, end, left, right) => {
  if (end < left || right < start) return Number.MAX_SAFE_INTEGER;
  if (left <= start && end <= right) return segementTree[node];

  const mid = parseInt((start + end) / 2);
  const leftVal = findMinValue(node * 2, start, mid, left, right);
  const rightVal = findMinValue(node * 2 + 1, mid + 1, end, left, right);

  return Math.min(leftVal, rightVal);
};

const changeSegmentTree = (node, start, end, search, val) => {
  if (start === end && start === search) return (segementTree[node] = val);

  if (search < start || end < search) return segementTree[node];
  if (start <= search && search <= end) {
    const mid = parseInt((start + end) / 2);
    const leftVal = changeSegmentTree(node * 2, start, mid, search, val);
    const rightVal = changeSegmentTree(node * 2 + 1, mid + 1, end, search, val);

    return (segementTree[node] = Math.min(leftVal, rightVal));
  }
};

const answer = [];
query.forEach((el) => {
  const [flag, a, b] = el;
  if (flag === 1) {
    changeSegmentTree(1, 1, N, a, b);
  } else if (flag === 2) {
    answer.push(findMinValue(1, 1, N, a, b));
  }
});
console.log(answer.join("\n"));
