const [[N,M], ...matrix] ='3 4\n1 2 3 4\n0 0 0 5\n9 8 7 6'.toString()
// const [[N,M], ...matrix] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(v => v.split(' ').map(Number));

const maxMatrix = JSON.parse(JSON.stringify(matrix));

for (let i=0; i<N; i++)
{
    for (let j=0; j<M; j++)
    {
        for (let x of [[i+1,j],[i,j+1],[i+1,j+1]])
        {
            const [nextX, nextY] = x;
            if (nextX < N && nextY < M)
            {
                maxMatrix[nextX][nextY] = Math.max(maxMatrix[i][j]+matrix[nextX][nextY], maxMatrix[nextX][nextY]);
            }
        }
    }
}

console.log(maxMatrix[N-1][M-1])
