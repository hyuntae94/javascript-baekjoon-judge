const input = `5
6 3 2 10 -10
8
10 9 -5 2 3 4 5 -10`
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const hasCard = input[1].split(" ").map(Number);
const checkCard = input[3].split(" ").map(Number);

// const map = new Map();

// const answer = [];
// hasCard.forEach((el) => {
//   map.set(el, 1);
// });
// // console.log(map);

// checkCard.forEach((el) => {
//   if (map.has(el)) answer.push(1);
//   else answer.push(0);
// });
// console.log(answer.join(" "));

const array = new Array(20000001).fill(0);
const answer = [];
hasCard.forEach((el) => {
  if (el < 0) array[10000000 + Math.abs(el)] = 1;
  else array[el] = 1;
});

checkCard.forEach((el) => {
  let check = null;
  if (el < 0) {
    check = 10000000 + Math.abs(el);
  } else check = el;

  if (array[check]) answer.push(1);
  else answer.push(0);
});
console.log(answer.join(" "));
