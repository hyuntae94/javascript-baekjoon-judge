// const [[R,C],...map] = '4 6\n101111\n101010\n101011\n111011'
const [[R,C],...map] = require('fs').readFileSync('./dev/stdin')
.toString()
.split('\n')
.map((v,idx) => idx === 0 ? v.split(' ').map(Number) : v.split('').map(Number));

const visit = Array.from( {length:R}, () => new Array(C).fill(0));
const queue = [[0,0,1]];

visit[0][0] = 1;

let index = 0;
while (index < queue.length)
{
    const [x,y,height] = queue[index++];

    if (x === R-1 && y === C-1){
        console.log(height);
        break ;
    }

    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];

    for (let i=0; i<4; i++){
        if (x+dx[i] >= 0 && x+dx[i] < R && y+dy[i] >= 0 && y+dy[i] < C 
                && !visit[x+dx[i]][y+dy[i]]
                && map[x+dx[i]][y+dy[i]])
                {
                    queue.push([x+dx[i],y+dy[i],height+1]);
                    visit[x+dx[i]][y+dy[i]] = 1;
                }
    }
}
