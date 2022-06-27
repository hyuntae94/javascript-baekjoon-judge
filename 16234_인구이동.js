const [[N,L,R],...ground] = '3 5 10\n10 15 20\n20 30 25\n40 22 10'.toString()
// const [[N,L,R],...ground] = '4 10 50\n10 100 20 90\n80 100 60 70\n70 20 30 40\n50 20 100 10'.toString()
// const [[N,L,R],...ground] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(data => data.split(' ').map(Number));

let visit = Array.from( {length: N}, () => new Array(N).fill(0));

let flag = 0;
let answer = 0;
function changeGround(united)
{   
    let sum = 0;
    united.forEach( v => {
        sum += ground[v[0]][v[1]]  
    })
    
    let rePopoular = parseInt(sum / united.length);
    united.forEach(v => ground[v[0]][v[1]] = rePopoular);
 
}


function checkUnited(row,col)
{
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];

   let queue = [[row,col]];
   let index = 0;
   visit[row][col]=1;
   while(index < queue.length)
   {
    let [posX,posY] = queue[index++];

        for(let i=0; i<4; i++)
        {
            const [nextX, nextY] = [posX+dx[i], posY+dy[i]];
            
            if (nextX >=0 && nextY >= 0 && nextX < N && nextY < N)
            {        
                let compare1 = ground[posX][posY];
                let compare2 = ground[nextX][nextY];
                let result = Math.abs(compare1-compare2);

                if (!visit[nextX][nextY] && result >= L && result <= R)
                {
                    queue.push([nextX,nextY]);
                    visit[nextX][nextY] = 1;
                    flag = 1;
                }
            }
        }
   }
   if (queue.length > 1) changeGround(queue)
}

    
while (1)
{
    for (let i=0; i<N; i++){
        for (let j=0; j<N; j++){
            if (!visit[i][j])
                checkUnited(i,j);
        }
    }
    if (flag){
        answer += 1;
        visit = Array.from( {length: N}, () => new Array(N).fill(0));
        flag = 0;
    }
    else break;
}

console.log(answer);