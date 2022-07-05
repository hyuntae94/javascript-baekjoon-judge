const [N,[r1,c1,r2,c2]] = '7\n6 6 0 1'.toString()
// const [N,[r1,c1,r2,c2]] = '6\n5 1 0 5'.toString()
// const [N,[r1,c1,r2,c2]] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map((el,idx) => idx === 0 ? +el : el.split(' ').map(Number))

const visited = Array.from({length : N}, () => new Array(N).fill(0));
const queue = [[r1,c1,0]];
visited[r1][c1] = 1;

let index = 0;
while (index < queue.length)
{
    const [curRow,curCol,move] = queue[index++];
    const dx = [-2,-2,0,0,2,2];
    const dy = [-1,1,-2,2,-1,1];

    for (let i=0; i<6; i++){
        const [nextRow, nextCol] = [curRow+dx[i], curCol+dy[i]];

        if (nextRow >= 0 && nextRow < N && nextCol >= 0 && nextCol < N 
                && !visited[nextRow][nextCol]){
                    if (nextRow === r2 && nextCol === c2){
                        console.log(move+1);
                        return ;
                    }
                    queue.push([nextRow,nextCol,move+1]);
                    visited[nextRow][nextCol] = 1;
                }
    }

}
console.log(-1);

//방문체크배열
//초기값 큐에 삽입
//초기값 방문처리
//반복문 시작
//초기값에서 갈 수 있는 경로 큐에 넣어줌
//갈 수 있는 방문처리
//큐에서 하나씩 꺼내면서 위 과정을 반복
//최종경로가 나오면 종료
//더이상 큐에 원소가 없으면 -1 리턴