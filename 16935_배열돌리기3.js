let [[N,M,R], ...matrix] = "2 8 6\n3 2 6 3 1 2 9 7\n9 7 8 2 1 4 5 3\n6".toString()
.split('\n').map(v=> v.split(' ').map(Number));
// let [[N,M,R], ...matrix] = require('fs').readFileSync('./dev/stdin').toString()
// .split('\n').map(v=> v.split(' ').map(Number));

const cal = matrix.pop();
//N은 행
//M은 열

//1번 상하반전
function changeTopAndBottom(){
    // for(let i=0; i < N/2; i++){
    //     let tmp = matrix[i];
    //     matrix[i] = matrix[N-1-i];
    //     matrix[N-1-i] = tmp;
    // }
    matrix.reverse();
}
//2번 좌우반전
function changeLeftAndRight(){
    // for(let i=0; i<N; i++){
    //     for(let j=0; j<M/2; j++){
    //         let tmp = matrix[i][j];
    //         matrix[i][j] = matrix[i][M-1-j];
    //         matrix[i][M-1-j] = tmp;
    //     }
    // }
    matrix = matrix.map( val => val.reverse());
}
//3번 오른쪽으로 90도 회전
function rightRota90(){
    let newMatrix = Array.from( {length: M}, () => new Array(N).fill(0));
    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            newMatrix[col][N-1-row] = matrix[row][col];
        }
    }
    matrix = newMatrix;
}
//4번 왼쪽으로 90도 회전
function leftRota90(){
    let newMatrix = Array.from( {length: M}, () => new Array(N).fill(0));
    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            newMatrix[M-1-col][row] = matrix[row][col];
        }
    }
    matrix = newMatrix;
}
//5번 subArray
function subArrayRightRota(){
    let newMatrix = Array.from( {length: N}, () => new Array(M).fill(0));

    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            if(row < N/2 && col < M/2){
                newMatrix[row][col+M/2] = matrix[row][col];
            }
            else if (row < N/2 && col >= M/2){
                newMatrix[row+N/2][col] = matrix[row][col];
            }
            else if (row >= N/2 && col >= M/2){
                newMatrix[row][col-M/2] = matrix[row][col];
            }
            else {
                newMatrix[row-N/2][col] = matrix[row][col];
            }
        }
    }
    matrix = newMatrix;
}
//6번 subArray
function subArrayLeftRota(){
    let newMatrix = Array.from( {length: N}, () => new Array(M).fill(0));

    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            if(row < N/2 && col < M/2){
                newMatrix[row+N/2][col] = matrix[row][col];
            }
            else if (row < N/2 && col >= M/2){
                newMatrix[row][col-M/2] = matrix[row][col];
            }
            else if (row >= N/2 && col >= M/2){
                newMatrix[row-N/2][col] = matrix[row][col];
            }
            else {
                newMatrix[row][col+M/2] = matrix[row][col];
            }
        }
    }
    matrix = newMatrix;
}


for(let x of cal){
    if (x === 1) changeTopAndBottom();
    else if (x === 2) changeLeftAndRight();
    else if (x === 3) rightRota90();
    else if (x === 4) leftRota90();
    else if (x === 5) subArrayRightRota();
    else if (x === 6) subArrayLeftRota();
    else continue;
    N = matrix.length;
    M = matrix[0].length;
};
let answer = "";
for(let x of matrix){
    answer += `${x.join(' ')}\n`;
}
console.log(answer.slice(0,-1));

