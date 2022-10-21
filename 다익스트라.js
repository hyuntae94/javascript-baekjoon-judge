const visited = new Array(6).fill(0);

const adjArr = [
  [0, 10, 1, 4, Infinity, Infinity],
  [10, 0, 2, 5, Infinity, Infinity],
  [1, 2, 0, 1, Infinity, 8],
  [4, 5, 1, 0, Infinity, 3],
  [Infinity, Infinity, Infinity, Infinity, 0, 2],
  [Infinity, Infinity, 8, 3, 2, 0],
];
const distance = adjArr[0].slice();
visited[0] = 1;
//0->A,1->B,2->C,3->D,4->E,5->F
//먼저 A에서 출발한다는 가정하에 A방문처리
//A거리를 최단거리 초기값으로 설정

while (1) {
  let min = Number.MAX_SAFE_INTEGER;
  let minIdx = null;
  //방문하지 않았고 가장작은 값과 인덱스 선별
  for (let i = 0; i < distance.length; i++) {
    if (!visited[i] && distance[i] < min) {
      min = distance[i];
      minIdx = i;
    }
  }
  //최단거리 찾았으면 방문처리
  visited[minIdx] = 1;
  let flag = 0;
  for (let i = 0; i < visited.length; i++) {
    if (!visited[i]) flag = 1;
  }

  //종료문
  //만약 모든 노드를 방문했다면 종료
  if (!flag) break;

  //해당 인덱스의 거리값에 최소 값을 더해준다
  //why? 최소값은 지금까지 이동한 거리이기 때문에
  let addDistance = adjArr[minIdx].slice().map((el) => el + min);
  for (let i = 0; i < distance.length; i++) {
    if (!visited[i]) {
      distance[i] = Math.min(addDistance[i], distance[i]);
    }
  }
}
console.log("최단거리 : ", distance);
console.log("방문처리 : ", visited);
