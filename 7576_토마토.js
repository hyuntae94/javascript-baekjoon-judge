// const [[col,row],...matrix] = '5 5\n-1 1 0 0 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 -1 -1 -1 0\n0 0 0 0 0'
const [[col,row],...matrix] = '6 4\n1 -1 0 0 0 0\n0 -1 0 0 0 0\n0 0 0 0 -1 0\n0 0 0 0 -1 1'
// const [[col,row],...matrix] = '2 2\n1 -1\n-1 1'
// const [[col,row],...matrix] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n').map(v => v.split(' ').map(Number));

const queue = [];
let countZero = 0;
for (let i=0; i<row; i++){
    for (let j=0; j<col; j++){
        if (matrix[i][j] === 1) queue.push([i,j,1]);
        else if (matrix[i][j] === 0) countZero += 1;
    }
}

let index = 0;
let max = 1;
let visitZero = 0;

while (index < queue.length){
    const [r,c,cnt] = queue[index++];

    let dx = [-1,0,1,0];
    let dy = [0,1,0,-1];

    for (let i=0; i<4; i++){
        if (r+dx[i] >=0 && r+dx[i] < row && c+dy[i] >= 0 && c+dy[i] <col && matrix[r+dx[i]][c+dy[i]] === 0){
            queue.push([r+dx[i], c+dy[i], cnt+1]);
            matrix[r+dx[i]][c+dy[i]] = cnt+1;
            max = Math.max(max, cnt+1);
            visitZero += 1;
        }
    }
}

if (visitZero !== countZero){
    console.log(-1);
} else if (max === 1){
    console.log(0);
} else {
    console.log(max-1);
}