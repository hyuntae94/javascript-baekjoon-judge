let [words, boom] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(""));

const answer = [];

for (let idx = 0; idx < words.length; idx++) {
  answer.push(words[idx]);
  if (answer.at(-1) === boom.at(-1)) {
    if (answer.length < boom.length) continue;
    let flag = true;
    for (let j = 0; j < boom.length; j++) {
      if (answer[answer.length - boom.length + j] !== boom[j]) {
        flag = false;
        break;
      }
    }
    if (flag) {
      for (let i = 0; i < boom.length; i++) answer.pop();
    }
  }
}
answer.length ? console.log(answer.join("")) : console.log("FRULA");
