const board = `........
........
........
........
........
.#######
#.......
........`.toString().split('\n').map(el => el.split(''));
// const board = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(''));
function downBoard(matrix){
    const newBoard = [['.','.','.','.','.','.','.','.']];

    for(let i=0; i<7; i++){
        newBoard.push(matrix[i]);
    }
    return newBoard;
}

const dx = [1,1,1,0,0,0,-1,-1,-1].reverse;
const dy = [-1,0,1,-1,0,1,-1,0,1];
let answer = 0;
function bfs(){
    //상하좌우대각선

    const queue = [[7,0,board]];
    let idx = 0;
    while(queue.length){

        const [row,col,matrix] = queue.shift();

        if (row === 0 && col === 7){
            answer = 1;
            break;
        }

        for(let i=0; i<8; i++){
            const [nextRow, nextCol] = [row+dx[i], col+dy[i]];
            const nextBoard = downBoard(matrix);
            if (nextRow >=0 && nextCol >=0 && nextRow < 8 && nextCol < 8){
                if (matrix[nextRow][nextCol] !== '#' && nextBoard[nextRow][nextCol] !=='#'){
                    queue.unshift([nextRow,nextCol,nextBoard]);
                }
            }
        }
    }
}
bfs();

console.log(answer);