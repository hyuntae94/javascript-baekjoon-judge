const [N, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
// const input = [-3, 5, 2, -11, 6, 9, 1, 5];
console.log(
  input
    .sort((a, b) => {
      if (a > b) return 1;
      else if (a === b) return 0;
      else return -1;
    })
    .join("\n")
);
