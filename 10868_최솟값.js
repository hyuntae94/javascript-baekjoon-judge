const [[N, M], ...input] = `10 4
75
30
100
38
50
51
52
20
81
5
1 10
3 5
6 9
8 10`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? el.split(" ").map(Number) : el));

const nodeArr = input.splice(0, N).map(Number);
const nodePairs = input.map((el) => el.split(" ").map(Number));
const treeHeight = Math.ceil(Math.log2(N));
const treeSize = Math.pow(2, treeHeight + 1);
const segmentTree = new Array(treeSize).fill(null);

function makeSegmentTree(node, start, end) {
  if (start === end) return (segmentTree[node] = nodeArr[start - 1]);

  let mid = parseInt((start + end) / 2);
  const leftNode = makeSegmentTree(node * 2, start, mid);
  const rightNode = makeSegmentTree(node * 2 + 1, mid + 1, end);
  segmentTree[node] = Math.min(leftNode, rightNode);

  return segmentTree[node];
}

makeSegmentTree(1, 1, N);

function findSum(node, start, end, left, right) {
  //찾고자하는 범위 밖
  if (end < left || right < start) return Number.MAX_SAFE_INTEGER;
  //현재 탐색범위가 찾고자하는 범위안에 완전히 포함
  if (left <= start && end <= right) return segmentTree[node];

  //그 외 조금이라도 겹쳐있을 때

  const mid = parseInt((start + end) / 2);
  const leftValue = findSum(node * 2, start, mid, left, right);
  const rightValue = findSum(node * 2 + 1, mid + 1, end, left, right);

  return Math.min(leftValue, rightValue);
}

const answer = [];
for (let i = 0; i < M; i++) {
  const [left, right] = nodePairs[i];

  answer.push(findSum(1, 1, N, left, right));
}
console.log(answer.join("\n"));

//   function updateSegmentTree(node, start, end, idx, diff) {
//     if (idx < start || end < idx) return;
//     segmentTree[node] += diff;
//     if (start !== end) {
//       const mid = parseInt((start + end) / 2);
//       updateSegmentTree(node * 2, start, mid, idx, diff);
//       updateSegmentTree(node * 2 + 1, mid + 1, end, idx, diff);
//     }
//   }

//   let idx = 2;
//   let value = 5;
//   const diff = value - array[idx - 1];
//   array[idx - 1] = value;
//   updateSegmentTree(1, 1, N, idx, diff);
