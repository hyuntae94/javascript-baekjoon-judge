let [[N, K], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? el.split(" ").map(Number) : +el));
input.sort((a, b) => b - a);

let count = 0;

for (let i = 0; i < input.length; i++) {
  const q = parseInt(K / input[i]);
  const r = K % input[i];
  if (q < 1) continue;

  count += q;
  K = r;

  if (r === 0) break;
}
console.log(count);
