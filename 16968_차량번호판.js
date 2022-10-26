const input = "dcdcd".toString().split("");
// const input = require("fs").readFileSync("./dev/stdin").toString().split("");
let cntNumber = 10;
let cntAlpha = 26;

let answer = 1;
for (let i = 0; i < input.length; i++) {
  //초기화 과정

  if (input[i] === "d") {
    cntAlpha = 26;
    if (i > 0 && input[i - 1] === "d") {
      answer *= 9;
    } else answer *= cntNumber;
  } else {
    cntNumber = 10;
    if (i > 0 && input[i - 1] === "c") {
      answer *= 25;
    } else answer *= cntAlpha;
  }
}
console.log(answer);
