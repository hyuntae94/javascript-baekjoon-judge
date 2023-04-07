const [A, B, C] = `10 15 35`.toString().trim().split(" ").map(Number);

const SUM = A + B + C;

if (SUM % 3 !== 0) {
  console.log(0);
  return;
}

const visited = Array.from({ length: 1501 }, () => new Array(1501).fill(0));
const queue = [[A, B]];
visited[A][B] = 1;

let idx = 0;
while (idx < queue.length) {
  const [a, b] = queue[idx++];
  const temp = [a, b, SUM - a - b];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (temp[i] < temp[j]) {
        const num1 = temp[i] * 2;
        const num2 = temp[j] - temp[i];
        if (visited[num1][num2]) continue;

        visited[num1][num2] = 1;
        queue.push([num1, num2]);
      }
    }
  }
}

console.log(visited[parseInt(SUM / 3)][parseInt(SUM / 3)]);
