const [N, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split(" ")
  .map(Number);
let answer = N.toString(36);
let ret = "";
for (let i = 0; i < answer.length; i++) {
  if (answer[i] >= "a" && answer[i] <= "z") {
    ret += answer[i].toUpperCase();
    continue;
  }
  ret += answer[i];
}

console.log(ret);
