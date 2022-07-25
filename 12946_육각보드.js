// 4
// XXXX
// ---X
// ---X
// ---X
// const [N, ...input] = require('fs').readFileSync('./dev/stdin').toString()
const [N, ...input] = '4\nXXXX\nXXXX\nXXXX\nXXXX'.toString()
// const [N, ...input] = '3\n---\n---\n---'.toString()
.split('\n').map((el,idx) => idx === 0 ? +el : el.split(''));
const paintedMatrix = Array.from( { length : N }, () => new Array(N).fill(0));

let answer = 0;

function targetPaint(row, column, colors){
    const setColors = [...new Set(colors)].sort((a,b)=>a-b);
    let color = setColors.at(-1) + 1;

    for(let idx=0; idx<setColors.length; idx++){
        if (setColors[idx] !== idx){
            color = idx;
            break;
        } 
    }

    paintedMatrix[row][column] = color;
    if(color > answer) answer = color;
}


function searchAroundColor(row, column){
    const dx = [-1,-1,0,0,1,1];
    const dy = [0,1,-1,1,-1,1];

    const colors = [0];

    for(let idx=0; idx<6; idx++){
        const [checkRow, checkColumn] = [row+dx[idx], column+dy[idx]];
        
        if (checkRow >= 0 && checkColumn >= 0 && checkRow < N && checkColumn < N){
            colors.push(paintedMatrix[checkRow][checkColumn]);
        }
    }
    targetPaint(row,column,colors);
}


for(let row=0; row<N; row++){
    for(let column=0; column<N; column++){
        if (input[row][column] === 'X') searchAroundColor(row,column);
    }
}

console.log(answer);

