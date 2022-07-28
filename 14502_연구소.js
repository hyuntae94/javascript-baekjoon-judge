const [[N,M],...map] = '4 6\n0 0 0 0 0 0\n1 0 0 0 0 2\n1 1 1 0 0 2\n0 0 0 0 0 2'.toString()
// const [[N,M],...map] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(el => el.split(' ').map(Number));

console.log(N,M,map);

let wallCount = 3;
let safeMax = Number.MIN_SAFE_INTEGER;

function createWall(row,col){

    if (!wallCount)
    {
        findVirus(JSON.parse(JSON.stringify(map)));
        return ;
    }

    for(let r=row; r<N; r++){
        for(let c=col; c<M; c++){
            if (!map[r][c]){
                map[r][c] = 1;
                wallCount -= 1;
                createWall(r,c);
                map[r][c] = 0;
                wallCount += 1;
            }
        }
        col=0;
    }
}

function findVirus(_map){
    const virusBase = [];

    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            if (_map[row][col] === 2) virusBase.push([row,col]);
        }
    }
    virusInfection(virusBase,_map);
}

function virusInfection(virusBase,_map){
    
    const dx=[-1,0,1,0];
    const dy=[0,1,0,-1];

    let index = 0;
    while(index < virusBase.length){
        const [virusRow, virusCol] = virusBase[index++];

        for(let i=0; i<4; i++){
            const[nextRow, nextCol] = [virusRow+dx[i], virusCol+dy[i]];

            if (nextRow >= 0 && nextCol >= 0 && nextRow < N && nextCol < M 
                    && !_map[nextRow][nextCol]) {
                        virusBase.push([nextRow,nextCol]);
                        _map[nextRow][nextCol] = 2;
                    }
        }
    }
    findSafeZone(_map);
}


function findSafeZone(_map){

    let safezone = 0;

    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            if (_map[row][col] === 0) safezone += 1;
        }
    }

    safeMax = Math.max(safeMax,safezone); 
}

createWall(0,0);

console.log(safeMax);
// 7 7
// 2 0 0 0 1 1 0
// 0 0 1 0 1 2 0
// 0 1 1 0 1 0 0
// 0 1 0 0 0 0 0
// 0 0 0 0 0 1 1
// 0 1 0 0 0 0 0
// 0 1 0 0 0 0 0

// 4 6
// 0 0 0 0 0 0
// 1 0 0 0 0 2
// 1 1 1 0 0 2
// 0 0 0 0 0 2

// 1. 맵돌면서 벽3개 세우고
// 2. 빈칸 검색
