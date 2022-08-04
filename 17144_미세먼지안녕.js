// let [[R,C,T], ...map] = `7 8 50
// 0 0 0 0 0 0 0 9
// 0 0 0 0 3 0 0 8
// -1 0 5 0 0 0 22 0
// -1 8 0 0 0 0 0 0
// 0 0 0 0 0 10 43 0
// 0 0 5 0 15 0 0 0
// 0 0 40 0 0 0 20 0`.toString()
// .split('\n').map(el => el.split(' ').map(Number));
let [[R,C,T], ...map] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(el => el.split(' ').map(Number));

const dx = [-1,0,1,0];
const dy = [0,1,0,-1];


for(let time=0; time<T; time++){


//미세먼지확장
//1. 미세먼지 있는 칸 탐색
    const dust = [];
    const findCleaner = [];

    for(let row=0; row<R; row++){
        for(let col=0; col<C; col++){
            if (map[row][col] > 0) dust.push([row,col])
            if (map[row][col] === -1) findCleaner.push(row);
        }
    }

    
//2. 먼지 확장 
    const spreadDust = [];

    for(let [r,c] of dust){
        if (map[r][c] / 5  >= 1) {
            let count = 0;
            for(let i=0; i<4; i++){
                const [moveRow, moveCol] = [r+dx[i], c+dy[i]];

                if (moveRow >= 0 && moveCol >= 0 && moveRow < R && moveCol < C && map[moveRow][moveCol] !== -1){
                    spreadDust.push([moveRow,moveCol, parseInt(map[r][c] / 5)]);
                    count += 1;    
                }
            }
                map[r][c] -= count * parseInt(map[r][c] / 5)
        }
    }

    for (let [r,c,dust] of spreadDust){
        map[r][c] += dust;
    }
    

//3.공기청정기 작동

    let _map = JSON.parse(JSON.stringify(map));
    const [up,down] = findCleaner;
    //청정기 위쪽

    _map.forEach((els,row) => {
        if(row <= up){
            els.forEach((_,col) => {
                if(row === up && col >= 1 && col <= C-2){
                    map[row][col+1] = _map[row][col];
                } else if (row > 0 && row <= up && col === C-1){
                    map[row-1][col] = _map[row][col];
                } else if (row === 0 && col > 0){
                    map[row][col-1] = _map[row][col];
                } else if (row <= up-2 && col === 0){
                    map[row+1][col] = _map[row][col];
                }
            })
        } else {
            els.forEach((_,col) => {
                if(row === down && col >= 1 && col <= C-2){
                    map[row][col+1] = _map[row][col];
                } else if (row >= down && row <= R-2 && col === C-1){
                    map[row+1][col] = _map[row][col];
                } else if (row === R-1 && col > 0){
                    map[row][col-1] = _map[row][col];
                } else if (row >= down+2 && col === 0){
                    map[row-1][col] = _map[row][col];
                } 
            })
        }
    });
    map[up][1] = 0;
    map[down][1] = 0;
} 

let answer = 0;
map.forEach((_)=>{
    _.forEach((el) => {
        if (el > 0) answer += el;
    })
})

console.log(answer);




