const [[N, M], ...input] = `5 10
baekjoononlinejudge
startlink
codeplus
sundaycoding
codingsh
baekjoon
star
start
code
sunday
coding
cod
online
judge
plus`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? el.split(" ").map(Number) : el.split("")));
const S = input.slice(0, N);
const word = input.slice(N);
const map = new Map();

let answer = 0;
S.forEach((str) => {
  for (let el of word) {
    if (map.has(el)) continue;
    const length = el.length;
    let flag = 0;
    for (let i = 0; i < length; i++) {
      if (str[i] !== el[i]) {
        flag = 1;
        break;
      }
    }
    if (!flag && !map.has(el)) {
      answer += 1;
      map.set(el, true);
    }
  }
});
console.log(answer);
