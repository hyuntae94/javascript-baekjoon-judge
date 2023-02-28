const [[N], ...input] = `3
000
010`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split("").map(Number));

const compare = [input[0].slice(), input[0].slice()];
const vaild = input[1].slice();
let [count1, count2] = [0, 0];
if (compare[0][0] === 0) {
  compare[0][0] ? (compare[0][0] = 0) : (compare[0][0] = 1);
  compare[0][1] ? (compare[0][1] = 0) : (compare[0][1] = 1);
  count1 += 1;
}
// console.log(compare, vaild);
//0번째 킨거 , 안킨거

for (let i = 1; i < N; i++) {
  if (compare[0][i - 1] !== vaild[i - 1]) {
    compare[0][i - 1] ? (compare[0][i - 1] = 0) : (compare[0][i - 1] = 1);
    compare[0][i] ? (compare[0][i] = 0) : (compare[0][i] = 1);
    if (i < N - 1)
      compare[0][i + 1] ? (compare[0][i + 1] = 0) : (compare[0][i + 1] = 1);
    count1 += 1;
  }

  if (compare[1][i - 1] !== vaild[i - 1]) {
    compare[1][i - 1] ? (compare[1][i - 1] = 0) : (compare[1][i - 1] = 1);
    compare[1][i] ? (compare[1][i] = 0) : (compare[1][i] = 1);
    if (i < N - 1)
      compare[1][i + 1] ? (compare[1][i + 1] = 0) : (compare[1][i + 1] = 1);
    count2 += 1;
  }
}

let min = Number.MAX_SAFE_INTEGER;

if (compare[0].every((el, idx) => el === vaild[idx])) {
  min = Math.min(min, count1);
}
if (compare[1].every((el, idx) => el === vaild[idx])) {
  min = Math.min(min, count2);
}

min === Number.MAX_SAFE_INTEGER ? console.log(-1) : console.log(min);
console.log(N);
