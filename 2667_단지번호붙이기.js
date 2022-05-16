const [[N], ...map] = '7\n1000000\n0000000\n0000000\n0000000\n0000000\n0000000\n0000000'
// const [[N], ...map] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n').map(v => v.split('').map(Number));
const houseNumber = [];
const visit = Array.from({length:N}, () => new Array(N).fill(0));

let answer = 0;
function bfs(row,col){
    const queue = [[row,col]];
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];

    let index = 0;
    while (index < queue.length)
    {
        const [x,y] = queue[index++];
        
        visit[x][y] = 1;

        for (let i=0; i<4; i++){
            if (x+dx[i] >= 0 && x+dx[i] < N && y+dy[i] >= 0 && y+dy[i] < N 
                && !visit[x+dx[i]][y+dy[i]]
                && map[x+dx[i]][y+dy[i]]){
                    queue.push([x+dx[i],y+dy[i]]);
                    visit[x+dx[i]][y+dy[i]] = 1;
                }
        }
    }
    houseNumber.push(queue.length);
}

for (let row=0; row<N; row++){
    for (let col=0; col<N; col++){
        if (map[row][col] && !visit[row][col]) bfs(row,col);
    }
}

console.log(houseNumber.length);
for (let i=0; i<houseNumber.length; i++){
    console.log(houseNumber[i]);
}
