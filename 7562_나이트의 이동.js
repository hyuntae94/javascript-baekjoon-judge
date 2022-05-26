const [T,...input] = '3\n300\n0 0\n288 299\n100\n0 0\n30 50\n10\n1 1\n1 1\n250\n120 112\n245 230\n222\n23 22\n193 203'
// const [T,...input] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n');

let answer = [];

for(let i=0; i<input.length; i+=3){
    const N = +input[i];
    const [startRow, startCol] = input[i+1].split(' ').map(Number);
    const [targetRow, targetCol] = input[i+2].split(' ').map(Number);

    const visit = Array.from( {length:N}, () => new Array(N).fill(-1));
    const queue = [[startRow,startCol]];
    visit[startRow][startCol] = 0;

    const dx = [-2,-2,-1,-1,1,1,2,2];
    const dy = [-1,1,-2,2,-2,2,-1,1];

    let index = 0;
    while (index < queue.length)
    {
        const [curRow, curCol] = queue[index++];

        if (curRow === targetRow && curCol === targetCol){
            answer.push(visit[curRow][curCol]);
            break;
        }

        for (let i=0; i<8; i++){
            if (curRow+dx[i] >=0 && curRow+dx[i] < N && curCol+dy[i] >=0 && curCol+dy[i] < N &&
                visit[curRow+dx[i]][curCol+dy[i]] === -1)
                {
                    queue.push([curRow+dx[i],curCol+dy[i]]);
                    visit[curRow+dx[i]][curCol+dy[i]] = visit[curRow][curCol]+1;
                }
        }
    }
}
console.log(answer.join('\n'));
return ;