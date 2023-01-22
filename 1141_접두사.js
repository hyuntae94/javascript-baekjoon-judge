const [N, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
let answer = 0;
input.sort((a, b) => a.length - b.length);
input.forEach((str, index) => {
  let flag = 0;
  for (let i = index + 1; i < input.length; i++) {
    if (input[i].indexOf(str) === 0) {
      flag = 1;
      break;
    }
  }
  if (!flag) answer += 1;
});
console.log(answer);
