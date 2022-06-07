// const [[N,M],...input] = '7 6\nAAAAAB\nABBBAB\nABAAAB\nABABBB\nABAAAB\nABBBAB\nAAAAAB'
// const [[N,M],...input] = '2 2\nAA\nAA'
const [[N,M],...input] = '2 5\nABCDE\nFGHIJ'
// const [[N,M],...input] = '3 4\nAAAA\nABCA\nAAFA'
// const [[N,M],...input] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n').map((v,i) => i === 0 ? v.split(' ').map(Number) : v.split(''));
const visit = Array.from( { length:N}, () => new Array(M).fill(0));

const dx = [1,0,-1,0];
const dy = [0,1,0,-1];

let posRow;
let posCol;
let flag = 0;

function search(Alphabet,row,col,alphCnt){
    for(let i=0; i<4; i++){
        let [nextRow,nextCol] = [row+dx[i], col+dy[i]];
    
        if (posRow === nextRow && posCol === nextCol && alphCnt >=4){
            flag = 1;
            return 1;
        }


        if (nextRow >=0 && nextCol >=0 && nextRow < N && nextCol < M 
            && !visit[nextRow][nextCol] && input[nextRow][nextCol] === Alphabet){
                visit[nextRow][nextCol] = 1;
                if (search(Alphabet, nextRow, nextCol,alphCnt+1)) return 1;
                
                visit[nextRow][nextCol] = 0;
            }
    }
}


for (let i=0; i<N; i++){
    for (let j=0; j<M; j++){
        posRow = i;
        posCol = j;
        visit[i][j] = 1;
        search(input[i][j],i,j,1);
        if (flag) break;
    }
}
console.log( flag ? "Yes" : "No");