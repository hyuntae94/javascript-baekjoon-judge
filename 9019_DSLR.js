const [[T], ...input] = `3
1234 3412
1000 1
1 16`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));
const answer = [];

for (let [start, end] of input) {
  const visited = new Array(10000).fill(0);
  visited[start] = 1;
  const queue = [[start, ""]];

  while (queue.length) {
    //종료조건
    const [number, option] = queue.shift();

    if (number === end) {
      answer.push(option);
      break;
    }

    const nextD = (number * 2) % 10000;
    if (!visited[nextD]) {
      visited[nextD] = 1;
      queue.push([nextD, option + "D"]);
    }

    const nextS = number === 0 ? 9999 : number - 1;
    if (!visited[nextS]) {
      visited[nextS] = 1;
      queue.push([nextS, option + "S"]);
    }

    const nextL = (number % 1000) * 10 + Math.floor(number / 1000);
    if (!visited[nextL]) {
      visited[nextL] = 1;
      queue.push([nextL, option + "L"]);
    }

    const nextR = (number % 10) * 1000 + Math.floor(number / 10);
    if (!visited[nextR]) {
      visited[nextR] = 1;
      queue.push([nextR, option + "R"]);
    }
  }
}
console.log(answer.join("\n"));
