const [F, S, G, U, D] = `10 1 10 2 1`.toString().trim().split(" ").map(Number);

const queue = [[S, 0]];
const visited = new Array(F + 1).fill(0);
visited[S] = 1;

let idx = 0;

const check = (floor) => {
  if (floor >= 1 && floor <= F && !visited[floor]) return true;
  return false;
};

while (queue.length) {
  const [cur, step] = queue.shift();

  if (cur === G) {
    console.log(step);
    return;
  }

  const up = cur + U;
  if (check(up)) {
    visited[up] = 1;
    queue.push([up, step + 1]);
  }
  const down = cur - D;
  if (check(down)) {
    visited[down] = 1;
    queue.push([down, step + 1]);
  }
}

console.log("use the stairs");
