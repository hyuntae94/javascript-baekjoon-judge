// const [[N],...input] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [[N],...input] = `8
1 1 1
2 3 0
3 2 2
3 2 3
3 1 3
2 0 0
3 2 0
3 1 2
3 1 1
2 1 2
1 3 0
1 0 0
1 3 0
1 0 0
2 1 0
2 1 0
2 1 0
2 1 0
2 2 2
2 2 2
2 2 2
2 2 2
2 2 2
3 2 0
2 0 0
3 1 1
2 0 0
2 0 0`.toString().trim().split('\n').map(el => el.split(' ').map(Number));

const b_Board = Array.from({length:4},()=>new Array(6).fill(0));
const g_Board = Array.from({length:6},()=>new Array(4).fill(0));
let score = 0;

function insertBlue(t,row){
    if (t===1){
        for(let i=0; i <=5; i++){
            if (b_Board[row][i]) {
                b_Board[row][i-1] = 1;
                return ;
            } 
        }
        b_Board[row][5] = 1;
    }
    else if (t===2){
        for(let i=0; i<=5; i++){
            if(b_Board[row][i]){
                b_Board[row][i-1] = 1;
                b_Board[row][i-2] = 1;
                return ;
            }
        }
        b_Board[row][5]=1;
        b_Board[row][4]=1;
    }
    else if (t===3){
        for(let i=0; i<=5; i++){
            if(b_Board[row][i] || b_Board[row+1][i]){
                b_Board[row][i-1] = 1;
                b_Board[row+1][i-1] = 1;
                return ;
            }
        }
        b_Board[row][5] = 1;
        b_Board[row+1][4] = 1;
    }
}

function insertGreen(t,col){
    if (t===1){
        for(let i=0; i <=5; i++){
            if (g_Board[i][col]) {
                g_Board[i-1][col] = 1;
                return ;
            } 
        }
        g_Board[5][col] = 1;
    }

    else if (t===2){
        for(let i=0; i<=5; i++){
            if(g_Board[i][col] || g_Board[i][col+1]){
                g_Board[i-1][col] = 1;
                g_Board[i-1][col+1] = 1;
                return ;
            }
        }
        g_Board[5][col] = 1;
        g_Board[5][col+1] = 1;
    }
    else if (t===3){
        for(let i=0; i<=5; i++){
            if(g_Board[i][col]){
                g_Board[i-1][col] = 1;
                g_Board[i-2][col] = 1;
                return ;
            }
        }
        g_Board[5][col]=1;
        g_Board[4][col]=1;
    }

}

function pullRow(row){
    for(let i=row; i>=1; i--){
        g_Board[i][0] = g_Board[i-1][0];
        g_Board[i][1] = g_Board[i-1][1];
        g_Board[i][2] = g_Board[i-1][2];
        g_Board[i][3] = g_Board[i-1][3];
    }
    for(let k=0; k<4; k++){
        g_Board[0][k] = 0;
    }
}

function pullCol(col){
    for(let i=col; i>=1; i--){
        b_Board[0][i] = b_Board[0][i-1];
        b_Board[1][i] = b_Board[1][i-1];
        b_Board[2][i] = b_Board[2][i-1];
        b_Board[3][i] = b_Board[3][i-1];
    }
    for(let k=0; k<4; k++){
        b_Board[k][0] = 0;
    }
}

function searchGreen(){
    for(let row=5; row>=2; row--){
        if(g_Board[row][0] &&
            g_Board[row][1] &&
            g_Board[row][2] &&
            g_Board[row][3]){
                pullRow(row);
                row += 1;
                score += 1;
            }
        }
    for(let row=1; row>=0; row--){
        if(g_Board[row][0] ||
            g_Board[row][1] ||
            g_Board[row][2] ||
            g_Board[row][3]){
                pullRow(5);
                row += 1;
            }
    }
}

function searchBlue(){
    for(let col=5; col>=2; col--){
        if(b_Board[0][col] &&
            b_Board[1][col] &&
            b_Board[2][col] &&
            b_Board[3][col]){
                pullCol(col);
                col += 1;
                score += 1;
            }
    }
    for(let col=1; col>=0; col--){
        if(b_Board[0][col] ||
            b_Board[1][col] ||
            b_Board[2][col] ||
            b_Board[3][col]){
                pullCol(5);
                col += 1;
            }
    }
}

for(let [t,x,y] of input){
    //블루칸
    insertBlue(t,x);
    searchBlue();

    //그린칸
    insertGreen(t,y);
    searchGreen();
}

let b_Sum = 0;
let g_Sum = 0;

b_Board.forEach((row)=>row.forEach((col)=> {
    if(col) {
        b_Sum += 1;
    }
}))

g_Board.forEach((row)=>row.forEach((col)=> {
    if(col) {
        g_Sum += 1;
    }
}))
console.log(`${score}\n${b_Sum+g_Sum}`);
console.log('green_board : ', g_Board);
console.log('blue_board : ', b_Board);
