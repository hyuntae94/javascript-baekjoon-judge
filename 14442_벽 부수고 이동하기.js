const [[N,M,K],...map] = `6 4 1
0100
1110
1000
0000
0111
0000`.toString().split('\n').map((el,idx) => idx === 0 ? el.split(' ').map(Number) : el.split('').map(Number));
// const [[N,M,K],...map] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map((el,idx) => idx === 0 ? el.split(' ').map(Number) : el.split('').map(Number));
const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

const visited = Array.from({length:N}, ()=> Array.from({length:M} , () => new Array(K+1).fill(0)));
const step = Array.from({length:N}, () => new Array(M).fill(0));
const walls = Array.from({length:N}, () => new Array(M).fill(Number.MAX_SAFE_INTEGER));
const queue = [[0,0,0]];


for(let i=0; i<=K; i++){
    visited[0][0][i] = 1;
}
walls[0][0] = 0;
step[0][0] = 1;

let idx =0;
while(idx < queue.length){
    const [row,col,wall] = queue[idx++];

    for(let i=0; i<4; i++){
        const [nextRow, nextCol] = [row+dx[i], col+dy[i]];

        if (nextRow >= 0 && nextCol >= 0 && nextRow < N && nextCol < M && walls[nextRow][nextCol] > wall){
           //벽이고 부순 횟수가 k개 이하이고 k번째 부순 놈이 방문안한곳
           if (map[nextRow][nextCol] && wall < K && !visited[nextRow][nextCol][wall+1] && walls[nextRow][nextCol] > wall + 1){
            visited[nextRow][nextCol][wall+1] = 1;
            step[nextRow][nextCol] = step[row][col] + 1;
            walls[nextRow][nextCol] = wall + 1;
            queue.push([nextRow,nextCol,wall+1]);
           }
           //벽이 아니고 방문안한곳
           if (!map[nextRow][nextCol] && !visited[nextRow][nextCol][wall]){
                visited[nextRow][nextCol][wall] = 1;
                step[nextRow][nextCol] = step[row][col] + 1;
                queue.push([nextRow,nextCol,wall]);
           }
           if(nextRow === N-1 && nextCol === M-1){
                console.log(step[nextRow][nextCol]);
                return ;    
           }
        }
    }
}

if (N === 1 && M === 1) console.log(1)
else console.log(-1);
