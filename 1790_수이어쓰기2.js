const [N, K] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
// console.log(N, K);

let idx = 1;
let totalCount = 9;
while (totalCount < N) {
  idx += 1;
  totalCount += 9 * Math.pow(10, idx - 1);
}
// console.log(idx, totalCount);

let sum = 0;
for (let i = 1; i < idx; i++) {
  sum += i * 9 * Math.pow(10, i - 1);
}
sum += (N - (totalCount - 9 * Math.pow(10, idx - 1))) * idx;

if (sum < K) {
  console.log(-1);
  return;
}

let numberIdx = 1;
let numberCount = 9;
let numberLen = 9;

while (numberLen < K) {
  numberIdx += 1;
  numberCount *= 10;
  numberLen += numberIdx * numberCount;
}
// console.log(numberIdx, numberCount, numberLen);
let tmp = numberLen - numberIdx * numberCount;
tmp = K - tmp;
const q = parseInt((tmp - 1) / numberIdx);
const r = (tmp - 1) % numberIdx;
// console.log(q, r);

let start = Math.pow(10, numberIdx - 1);
for (let i = 0; i < q; i++) {
  start += 1;
}
console.log(start.toString().split("")[r]);
