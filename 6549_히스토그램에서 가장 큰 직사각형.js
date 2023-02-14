const inputs = `7 2 1 4 5 1 3 3
4 1000 1000 1000 1000
0`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = [];
for (let i = 0; i < inputs.length - 1; i++) {
  const [N, ...input] = inputs[i];

  const treeHeight = Math.ceil(Math.log2(N));
  const treeSize = Math.pow(2, treeHeight + 1);
  const segmentTree = new Array(treeSize).fill(null);
  const makeSegmentTree = (node, start, end) => {
    if (start === end) {
      segmentTree[node] = start - 1;
      return;
    }

    const mid = parseInt((start + end) / 2);
    makeSegmentTree(node * 2, start, mid);
    makeSegmentTree(node * 2 + 1, mid + 1, end);

    if (input[segmentTree[node * 2]] > input[segmentTree[node * 2 + 1]])
      segmentTree[node] = segmentTree[node * 2 + 1];
    else segmentTree[node] = segmentTree[node * 2];
  };
  /**
   * @left 와 @right 구간은 우리가 찾고싶은 구간이고
   * @start 와 @end 구간은 탐색구간
   *
   */
  const find_Idx = (node, start, end, left, right) => {
    if (end < left || right < start) return -1;
    if (left <= start && end <= right) return segmentTree[node];

    const mid = parseInt((start + end) / 2);
    const left_idx = find_Idx(node * 2, start, mid, left, right);
    const right_idx = find_Idx(node * 2 + 1, mid + 1, end, left, right);

    if (left_idx === -1) return right_idx;
    if (right_idx === -1) return left_idx;
    if (input[left_idx] <= input[right_idx]) return left_idx;
    return right_idx;
  };

  const find_Area = (start, end) => {
    const minIdx = find_Idx(1, 0, N - 1, start, end);
    let answer = (end - start + 1) * input[minIdx];

    if (start <= minIdx - 1) {
      let left_result = find_Area(start, minIdx - 1);
      answer = Math.max(answer, left_result);
    }
    if (minIdx + 1 <= end) {
      let right_result = find_Area(minIdx + 1, end);
      answer = Math.max(answer, right_result);
    }

    return answer;
  };

  makeSegmentTree(1, 1, N);
  answer.push(find_Area(0, N - 1));
}
console.log(answer.join("\n"));
