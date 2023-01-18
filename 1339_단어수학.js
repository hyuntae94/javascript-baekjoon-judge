const [N, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? +el : el.split("")));

const map = new Map();

input.forEach((el) => {
  el.forEach((alpha, idx) => {
    const number = Math.pow(10, el.length - 1 - idx);
    if (!map.has(alpha)) map.set(alpha, number);
    else map.set(alpha, map.get(alpha) + number);
  });
});

const sortedArr = [...map].sort((a, b) => b[1] - a[1]);
const sortedMap = new Map();
let start = 9;
sortedArr.forEach((el) => {
  sortedMap.set(el[0], start);
  start -= 1;
});

let answer = 0;

input.forEach((el) => {
  let tmp = "";
  el.forEach((alpha) => {
    const num = sortedMap.get(alpha);
    tmp += num;
  });
  answer += +tmp;
});
console.log(answer);
