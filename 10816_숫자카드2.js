const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const hasCard = input[1].split(" ").map(Number);
const findCard = input[3].split(" ").map(Number);

const map = new Map();
const answer = [];
hasCard.forEach((number) => {
  if (!map.has(number)) map.set(number, 1);
  else map.set(number, map.get(number) + 1);
});
// console.log(map);

findCard.forEach((number) => {
  if (map.has(number)) answer.push(map.get(number));
  else answer.push(0);
});
console.log(answer.join(" "));
