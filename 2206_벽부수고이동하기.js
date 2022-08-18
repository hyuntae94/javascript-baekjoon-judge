const [[N,M],...map] = `1 1
0`.toString().split('\n').map((el,idx) => idx === 0 ? el.split(' ').map(Number) : el.split('').map(Number));

const answer = [];

const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

const visited = Array.from({length:N}, ()=> Array.from({length:M} , () => new Array(2).fill(0)));
const step = Array.from({length:N}, () => new Array(M).fill(0));

const queue = [[0,0,0]];
visited[0][0][0] = visited[0][0][1] = 1;

step[0][0] = 1;

let idx =0;
while(idx < queue.length){
    const [row,col,wall] = queue[idx++];


    for(let i=0; i<4; i++){
        const [nextRow, nextCol] = [row+dx[i], col+dy[i]];

        if (nextRow >= 0 && nextCol >= 0 && nextRow < N && nextCol < M){
           //벽이고 부순적이 없고 빙문안한곳
           if (map[nextRow][nextCol] && wall === 0 && !visited[nextRow][nextCol][wall+1]){
            visited[nextRow][nextCol][wall+1] = 1;
            step[nextRow][nextCol] = step[row][col] + 1;
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
