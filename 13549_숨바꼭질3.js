const [N,K] = '5 17'
// const [N,K] = require('fs').readFileSync('./dev/stdin')
.toString().split(' ').map(Number);

const visit = new Array(100001).fill(0);
let queue = [[N,0]];
visit[N] = 1;


if (N>=K){
    console.log(N-K);
    return ;
}
let index =  0;
while (index < queue.length){
    const [pos,time] = queue[index++];

    if (pos === K){
        console.log(time);
        break ;
    }

    for (let x of [pos*2,pos-1,pos+1]){
        if (x >= 0 && x <= 100000 && !visit[x]){
            visit[x] = 1;
            if (x === pos*2) queue.push([x,time]);
            else queue.push([x,time+1]);
        }
    }
}
//X*2만큼 점프를 하면 걸리는 시간이 0초 이므로
//dfs에서 같은 높이의 배열을 탐색할 때 X*2배열을 먼저 탐색할 수 있도록
//큐에 먼저 넣어주었다.