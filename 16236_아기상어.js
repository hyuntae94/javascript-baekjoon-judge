// const [[N],...matrix] =`6
// 5 4 3 2 3 4
// 4 3 2 3 4 5
// 3 2 9 5 6 6
// 2 1 2 3 4 5
// 3 2 1 6 5 4
// 6 6 6 6 6 6`.toString().trim().split('\n').map(el => el.split(' ').map(Number));

const [[N],...matrix] =require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));

const fishPos = Array.from({length:N+1}, ()=> new Array());
const dx = [-1,0,1,0];
const dy = [0,-1,0,1];

let times = 0;
let sharkSize = 2;
let totalCatchFish = 0;
let [sharkRow, sharkCol] = [0,0];

matrix.forEach((row,rIdx) => row.forEach((_,cIdx) => {
    if(matrix[rIdx][cIdx] === 9) {
        sharkRow = rIdx;
        sharkCol = cIdx;
        matrix[rIdx][cIdx] = 0;
    }
}))

function bfs(){
    //방문배열
    const visited = Array.from({length:N},()=>new Array(N).fill(0));

    const queue = [[sharkRow,sharkCol,0]];
    const fish = [];

    visited[sharkRow][sharkCol] = 1;
    
    let idx=0;
    while(idx < queue.length){
        const [r,c,depth] = queue[idx++];

        if(fish.length > 0 && depth === fish[0][2]) break;//탐색문 중간 종료

        for(let i=0; i<4; i++){
            const [nextR,nextC] = [r+dx[i], c+dy[i]];

            if (nextR >=0 && nextC >= 0 && nextR < N && nextC < N && !visited[nextR][nextC] && matrix[nextR][nextC] <= sharkSize){
                visited[nextR][nextC] = 1;
                queue.push([nextR,nextC,depth+1])
                if(matrix[nextR][nextC] < sharkSize && matrix[nextR][nextC] > 0){
                    fish.push([nextR,nextC,depth+1])
                }
            }
        }
    }
    
    if(fish.length === 0) return ;//함수 최종 종료문

    
    if(fish.length > 1){
        fish.sort((a,b)=>{
            if(a[0]<b[0]) return a[0]-b[0];
            else if(a[0]===b[0] && a[1]<b[1]) return a[1]-b[1];
        });
    }
    const [row,col,depth] = fish[0];
    // console.log(fish[0])
    // console.log('잡은 물고기들: ',fish)

    matrix[row][col] = 0;
    sharkRow = row;
    sharkCol = col;
    totalCatchFish += 1;

    if (totalCatchFish === sharkSize){
        totalCatchFish = 0;
        sharkSize += 1;
    }
    // console.log('sharkSize :',sharkSize)
    // console.log('totalCatchFish :',totalCatchFish,'\n')
    times += depth;
    bfs();
}
bfs();
console.log(times);

// const arr = [[2,2],[1,4],[2,3],[1,2],[2,1],
// [2,2],[1,4],[2,3],[1,2],[2,1],
// [2,2],[1,4],[2,3],[1,2],[2,1],
// [2,2],[1,4],[2,3],[1,2],[2,1],
// [2,2],[1,4],[2,3],[1,2],[2,1],
// [2,2],[1,4],[2,3],[1,2],[2,1],
// [2,2],[1,4],[2,3],[1,2],[2,1],
// [2,2],[1,4],[2,3],[1,2],[2,1]];
// console.log(arr.sort((a,b)=>{
//     if(a[0]-b[0] < 0) return a[0]-b[0];
//     else if(a[0]===b[0] && a[1]-b[1]<0) return a[1]-b[1];
// }
//     ));
//     console.log([].length)




