const [[N], ...schedule] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

schedule.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

let answer = 0;
let prev_end_time = 0;

for (let i = 0; i < schedule.length; i++) {
  if (prev_end_time <= schedule[i][0]) {
    prev_end_time = schedule[i][1];
    answer += 1;
  }
}
console.log(answer);
