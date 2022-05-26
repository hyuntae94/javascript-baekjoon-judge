// const [[col,row],...matrix] = '6 6\n0 0 1 1 1 1\n0 1 0 0 0 0\n0 0 1 1 1 1\n1 1 0 0 0 1\n0 1 1 0 1 0\n1 0 0 0 1 0'
// const [[col,row],...matrix] = '4 2\n0 0 0 1\n1 0 0 0'
const [[col,row],...matrix] = '3 3\n0 1 1\n1 1 1\n1 1 0'
// const [[col,row],...matrix] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n').map(v => v.split(' ').map(Number));

const visit = Array.from({length : row}, ()=>new Array(col).fill(0));

const queue = [[0,0,0]];
visit[0][0] = 1;

while (queue.length)
{
    const [posX,posY,wall] = queue.shift();

    if (posX === row-1 && posY === col-1)
    {
        console.log(wall);
        return ;
    }

    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];

    for (let i=0; i<4; i++)
    {
        const [nx, ny] = [posX+dx[i], posY+dy[i]];

        if (nx >= 0 && ny >= 0 && nx < row && ny < col && !visit[nx][ny])
        {
            visit[nx][ny] = 1;
            if (matrix[nx][ny])
            {
                matrix[nx][ny] = 0;
                queue.push([nx,ny,wall+1]);
            }
            else 
            {
                queue.unshift([nx,ny,wall]);
            }
        }
    }
}