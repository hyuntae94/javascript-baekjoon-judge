const [[N,M],...input] = `8 5
11001
00111
01011
00101
01001
00111
01011
00101`
.toString().split('\n').map((el,idx) => idx == 0 ? el.split(' ').map(Number) : el.split('').map(Number));
// const [[N,M],...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map((el,idx) => idx == 0 ? el.split(' ').map(Number) : el.split('').map(Number));

const group = JSON.parse(JSON.stringify(input));

const dx = [-1,0,1,0];
const dy = [0,1,0,-1];

function bfs(row,col,id){
    
    const queue = [[row,col]];
    let idx = 0;
    let ret = 1;
    
    while(idx < queue.length){
        const [posX, posY] = queue[idx++];
        for(let i=0; i<4; i++){
            const [nextX, nextY] = [posX+dx[i], posY+dy[i]];

            if (nextX >= 0 && nextY >= 0 && nextX < N && nextY < M && !group[nextX][nextY]){
                queue.push([nextX,nextY]);
                ret += 1;
                group[nextX][nextY] = id;
            }
        }
    }
    return ret;
}
const groupMap = new Map();
let groupId = 2;

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if (!group[i][j]){
            group[i][j] = groupId;
            const count = bfs(i,j,groupId);
            groupMap.set(groupId,count);
            groupId += 1;
        }
    }
}

function check(row,col){

    const groupList = new Set();
    let ret = 1;
    for(let i=0; i<4; i++){
        const [nextX, nextY] = [row+dx[i], col+dy[i]]

        if (nextX >= 0 && nextY >= 0 && nextX < N && nextY < M){
            if(group[nextX][nextY] !== 1){
                groupList.add(group[nextX][nextY])
            }
        }
    }
    
    groupList.forEach(el => {
        ret += groupMap.get(el)
    })

    return ret % 10;
}
let answer = '';

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if(group[i][j] === 1){
            input[i][j] = check(i,j);
        }
        answer += input[i][j];
    }
    if (i !== N-1) answer +='\n';
}
console.log(group)
console.log(groupMap);
console.log(answer);
