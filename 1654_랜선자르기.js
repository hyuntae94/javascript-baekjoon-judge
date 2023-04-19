const [[K, N], ...lans] = `4 11
802
743
457
539`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx === 0 ? el.split(" ").map(Number) : Number(el)));

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < K; i++) {
  if (max < lans[i]) max = lans[i];
}
let min = 1;
let answer = 0;
while (min <= max) {
  let mid = parseInt((max + min) / 2);
  console.log(mid);
  let count = 0;

  for (let i = 0; i < K; i++) {
    count += parseInt(lans[i] / mid);
  }

  if (count >= N) {
    min = mid + 1;
    if (answer < mid) answer = mid;
  } else {
    max = mid - 1;
  }
}
console.log(answer);
