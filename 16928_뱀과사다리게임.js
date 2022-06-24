// const [[N,M], ...matrix] = '3 7\n32 62\n42 68\n12 98\n95 13\n97 25\n93 37\n79 27\n75 19\n49 47\n67 17'.toString()
const [[N,M], ...matrix] = '4 9\n8 52\n6 80\n26 42\n2 72\n51 19\n39 11\n37 29\n81 3\n59 5\n79 23\n53 7\n43 33\n77 21'.toString()
.split('\n').map(v => v.split(' ').map(Number));

const board = new Array(101).fill(null).map((_,idx) => idx);
const visit = new Array(101).fill(-1);
const queue = [1];

visit[1] = 0;
for (let i=0; i<N+M; i++)
{
    const [from, to] = matrix[i];
    board[from] = to;
}

while (queue.length > 0)
{
    const pos = queue.shift();

    for(let i=1; i<=6; i++)
    {
        let next = pos+i;

        if (next > 100) continue;

        next = board[next];
        if (visit[next] === -1)
        {
            visit[next] = visit[pos] + 1;
            queue.push(next);
        }
    }
}
console.log(visit[100])

//시작값 [1,0]
//1부터 6까지 더해주고 방문처리
//더한 값 중에 뱀,사다리 시작값 나오면 이동한 값을 큐 맨앞으로 방문처리
