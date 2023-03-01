const [[N, K], input] = `4 0
2 -2 2 -2`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const psum = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  psum[i] = psum[i - 1] + input[i - 1];
}

const map = new Map();

let answer = 0;
for (let i = 1; i <= N; i++) {
  if (psum[i] === K) answer += 1;

  if (map.has(psum[i] - K)) answer += map.get(psum[i] - K);

  if (map.has(psum[i])) {
    map.set(psum[i], map.get(psum[i]) + 1);
    continue;
  }
  map.set(psum[i], 1);
}
console.log(answer);
