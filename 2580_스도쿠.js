const board = `0 3 5 4 6 9 2 7 8
7 8 2 1 0 5 6 0 9
0 6 0 2 7 8 1 3 5
3 2 1 0 4 6 8 9 7
8 0 4 9 1 3 5 0 6
5 9 6 8 2 0 4 1 3
9 1 7 6 5 2 0 8 0
6 0 3 7 0 1 9 5 2
2 5 8 3 9 4 7 6 0`.toString().split('\n').map(el => el.split(' ').map(Number));
// const board = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
let exitCount = 0;
const findZeroPostion = [];

for(let i=0; i<board.length; i++){
    for(let j=0; j<board[0].length; j++){
        if (board[i][j] === 0){
            exitCount += 1;
            findZeroPostion.push([i,j]);
        }
    }
}
function check(r,c,val){
    //가로,세로줄체크
    for(let i=0; i<board.length; i++){
        if (board[r][i] === val) return false;
    }
    for(let i=0; i<board.length; i++){
        if(board[i][c] === val) return false;
    }

    //33체크
    const checkRow = Math.floor(r/3) * 3;
    const checkCol = Math.floor(c/3) * 3;

    for(let i=checkRow; i<checkRow+3; i++){
        for(let j=checkCol; j<checkCol+3; j++){
            if(board[i][j] === val) return false;
        }
    }

    return true;
}


function sudoku(count){
    if (count === exitCount){
        console.log(board.map(el => el.join(' ')).join('\n'));
        return ;
    }

    const zeroRow = findZeroPostion[count][0];
    const zeroCol = findZeroPostion[count][1];

    for(let i=1; i<=board.length; i++){        
        if (check(zeroRow,zeroCol,i)){
            board[zeroRow][zeroCol] = i;
            sudoku(count+1);
            board[zeroRow][zeroCol] = 0;
        }
    }
}

sudoku(0);


//1. 제로 좌표 찾기
//2. 제로칸에 1부터 9까지 넣고 가로,세로,3x3에 중복된 숫자 있는지 파악
//2-1. 중복된 숫자가 없으면 해당 칸에 숫자 넣고 카운터 증가 시키고 2번 반복
//2-2. 중복된 숫자가 있다면 종료
//2-3. 만약 제로개수와 카운터 개수가 같다면 종료


