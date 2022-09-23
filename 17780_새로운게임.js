// A번 말이 이동하려는 칸이
// 흰색인 경우에는 그 칸으로 이동한다. 이동하려는 칸에 말이 이미 있는 경우에는 가장 위에 A번 말을 올려놓는다.
// A번 말의 위에 다른 말이 있는 경우에는 A번 말과 위에 있는 모든 말이 이동한다.
// 예를 들어, A, B, C로 쌓여있고, 이동하려는 칸에 D, E가 있는 경우에는 A번 말이 이동한 후에는 D, E, A, B, C가 된다.
// 빨간색인 경우에는 이동한 후에 A번 말과 그 위에 있는 모든 말의 쌓여있는 순서를 반대로 바꾼다.
// A, B, C가 이동하고, 이동하려는 칸에 말이 없는 경우에는 C, B, A가 된다.
// A, D, F, G가 이동하고, 이동하려는 칸에 말이 E, C, B로 있는 경우에는 E, C, B, G, F, D, A가 된다.
// 파란색인 경우에는 A번 말의 이동 방향을 반대로 하고 한 칸 이동한다. 방향을 반대로 한 후에 이동하려는 칸이 파란색인 경우에는 이동하지 않고 방향만 반대로 바꾼다.
// 체스판을 벗어나는 경우에는 파란색과 같은 경우이다.

const [[N,K],...input] = `4 4
0 0 2 0
0 0 1 0
0 0 1 2
0 2 0 0
2 1 1
3 2 3
2 2 1
4 1 3`.toString().split('\n').map(el => el.split(' ').map(Number));
const board = [];
for(let i=0; i<N; i++){
    board.push(input[i]);
}

const horesPos = Array.from({length:K+1}, () => new Array());
let boardOnHores = Array.from({length:N}, () => Array.from({length:N}, ()=> new Array()))

let number = 1;
for(let i=N; i<input.length; i++){
    const [row,col,dir] = input[i];

    horesPos[number][0] = row-1;
    horesPos[number][1] = col-1;

    boardOnHores[row-1][col-1].push([number,dir]) 

    number += 1;
}

const dx = [0,0,0,-1,1];
const dy = [0,1,-1,0,0];


for(let hores=1; hores<=4; hores++){
    const [row,col] = horesPos[hores];
    
    if (hores !== boardOnHores[row][col][0][0]) continue;

    const moveDir = boardOnHores[row][col][0][1];
    
    const [nextRow, nextCol] = [row+dx[moveDir], col+dy[moveDir]];

    //흰색
    if (board[nextRow][nextCol] === 0){
        let newHores = [...boardOnHores[nextRow][nextCol], ...boardOnHores[row][col]];
        boardOnHores[row][col] = [];
        boardOnHores[nextRow][nextCol] = newHores;
    }
    //빨간색
    else if (board[nextRow][nextCol] === 1) {
        let curHores = [...boardOnHores[nextRow][nextCol]].reverse();
        let newHores = [...boardOnHores[nextRow][nextCol], ...curHores];
        boardOnHores[row][col] = [];
        boardOnHores[nextRow][nextCol] = newHores;
    }
    //파란색 또는 체스판 밖
    else if (board[nextRow][nextCol] === 2 || nextRow < 0 || nextCol < 0 || nextRow >= N || nextCol >= N){
        let curHores = [...boardOnHores[nextRow][nextCol]];
        let firstHores = curHores[0];
        if (firstHores[1] === 1) {
            firstHores[1] = 2;
            const [next2Row, next2Col] = [nextRow,nextCol-1];
        }
        else if (firstHores[1] === 2){
            firstHores[1] = 1
        }
        else if (firstHores[1] === 3) firstHores[1] = 4;
        else if (firstHores[1] === 4) firstHores[1] = 3;
    }
}


