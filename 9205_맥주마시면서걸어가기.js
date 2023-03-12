const [TC, ...input] = `4
2
0 0
1000 0
1000 1000
2000 1000
2
0 0
1000 0
2000 1000
2000 2000
0
0 0
500 501
0
0 0
500 499`
  .toString()
  .trim()
  .split("\n");
// console.log(TC, input);
const answer = [];

const distanceBetweenTwoPoints = (x1, y1, x2, y2) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

for (let i = 0; i < input.length; i++) {
  const storeCnt = +input[i++];
  const start = input[i++].split(" ").map(Number);
  const store = [];
  let cnt = 0;
  for (let j = i; j < i + storeCnt; j++) {
    const [x, y] = input[j].split(" ").map(Number);
    store.push([x, y, cnt++]);
  }
  i += storeCnt;
  const end = input[i].split(" ").map(Number);

  //   console.log("편의점 개수 : ", storeCnt);
  //   console.log("출발지점 : ", start);
  //   console.log("편의점 모음 : ", store);
  //   console.log("도착지점 : ", end);

  if (distanceBetweenTwoPoints(start[0], start[1], end[0], end[1]) <= 1000) {
    answer.push("happy");
    continue;
  }

  const visited = new Array(store.length).fill(0);
  const queue = [];
  for (let k = 0; k < store.length; k++) {
    const [storeX, storeY, index] = store[k];

    if (distanceBetweenTwoPoints(start[0], start[1], storeX, storeY) <= 1000) {
      queue.push([storeX, storeY, index]);
      visited[index] = 1;
    }
  }
  //   console.log(queue);
  let idx = 0;
  let flag = 0;
  while (idx < queue.length) {
    const [curR, curC, index] = queue[idx++];

    if (distanceBetweenTwoPoints(curR, curC, end[0], end[1]) <= 1000) {
      answer.push("happy");
      flag = 1;
      break;
    }
    for (let i = 0; i < store.length; i++) {
      const [storeX, storeY, idx] = store[i];

      if (
        distanceBetweenTwoPoints(curR, curC, storeX, storeY) <= 1000 &&
        !visited[idx]
      ) {
        queue.push([storeX, storeY, idx]);
        visited[idx] = 1;
      }
    }
  }
  if (flag) continue;
  answer.push("sad");
}
console.log(answer.join("\n"));
