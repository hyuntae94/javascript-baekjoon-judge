//큐 구현
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.rear = null;
    this.length = 0;
  }

  isEmpty() {
    if (!this.head) return true;
    return false;
  }

  enqueue(param) {
    const node = new Node(param);

    if (!this.head) {
      this.head = node;
    } else {
      this.rear.next = node;
    }
    this.rear = node;
    this.length++;
  }

  dequeue() {
    if (!this.head) return false;

    const data = this.head.data;
    this.head = this.head.next;
    this.length--;

    return data;
  }
}

const [[N, M, K], ...matrix] = `6 4 1
0100
1110
1000
0001
0110
1000`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) =>
    idx ? el.split("").map(Number) : el.split(" ").map(Number)
  );

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => new Array(K + 1).fill(0))
);

visited[0][0][0] = 1;

const queue = new Queue();
queue.enqueue([0, 0, 1, 0, "day"]);

const dr = [-1, 0, 1, 0];
const dc = [0, 1, 0, -1];

while (!queue.isEmpty()) {
  const [curRow, curCol, curStep, curWall, curTime] = queue.dequeue();

  if (curTime === "day") {
    for (let i = 0; i < 4; i++) {
      const [nextRow, nextCol] = [curRow + dr[i], curCol + dc[i]];

      if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= M) continue;

      //낮인 경우 - 벽을 부술 수 있음
      //아직 방문하지 않았고 다음 벽을 안 부술 경우 -> 밤으로
      if (
        !visited[nextRow][nextCol][curWall] &&
        matrix[nextRow][nextCol] === 0
      ) {
        visited[nextRow][nextCol][curWall] = curStep + 1;
        queue.enqueue([nextRow, nextCol, curStep + 1, curWall, "night"]);
      }

      //아직 방문하지 않았고 다음 벽까지 합쳐서 벽 최대 개수 이하 경우 부수고 감 -> 밤으로
      if (
        !visited[nextRow][nextCol][curWall + 1] &&
        curWall + 1 <= K &&
        matrix[nextRow][nextCol] === 1
      ) {
        visited[nextRow][nextCol][curWall + 1] = curStep + 1;
        queue.enqueue([nextRow, nextCol, curStep + 1, curWall + 1, "night"]);
      }
    }
  } else {
    for (let i = 0; i < 4; i++) {
      const [nextRow, nextCol] = [curRow + dr[i], curCol + dc[i]];

      if (nextRow < 0 || nextRow >= N || nextCol < 0 || nextCol >= M) continue;

      //밤인 경우 - 벽을 못 부숨
      //아직 방문하지 않았고 다음칸이 벽이 아닌 경우만 -> 낮으로
      if (
        !visited[nextRow][nextCol][curWall] &&
        matrix[nextRow][nextCol] === 0
      ) {
        visited[nextRow][nextCol][curWall] = curStep + 1;
        queue.enqueue([nextRow, nextCol, curStep + 1, curWall, "day"]);
      }
      //아직 방문하지 않았고 다음칸까지 합쳐서 벽 최대 개수 이하 경우 기다림-> 낮으로
      if (
        !visited[nextRow][nextCol][curWall + 1] &&
        curWall + 1 <= K &&
        matrix[nextRow][nextCol] === 1
      ) {
        queue.enqueue([curRow, curCol, curStep + 1, curWall, "day"]);
      }
    }
  }
}
let answer = Number.MAX_SAFE_INTEGER;
for (let i = 0; i <= K; i++) {
  const step = visited[N - 1][M - 1][i];
  if (!step) continue;
  answer = Math.min(answer, step);
}
answer === Number.MAX_SAFE_INTEGER ? console.log(-1) : console.log(answer);
