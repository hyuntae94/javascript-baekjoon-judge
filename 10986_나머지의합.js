const [[N, M], input] = `5 3
1 2 3 1 2`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

// const pdivide = new Array(N + 1).fill(0);

// const map = new Map();

// for (let i = 1; i <= N; i++) {
//   pdivide[i] = (pdivide[i - 1] + input[i - 1]) % M;
//   if (!map.has(pdivide[i])) map.set(pdivide[i], 1);
//   else map.set(pdivide[i], map.get(pdivide[i]) + 1);
// }
// let answer = 0;
// const mapArray = [...map];
// for (let [number, count] of mapArray) {
//   answer += ((count - 1) * count) / 2;
//   if (number === 0) answer += count;
// }
// console.log(answer);

let sum = 0;
const count = new Array(1001).fill(0);

for (let i = 0; i < N; i++) {
  sum += input[i];
  count[sum % M]++;
}
let answer = 0;
for (let i = 0; i <= 1000; i++) {
  answer += ((count[i] - 1) * count[i]) / 2;
}
console.log(answer + count[0]);
