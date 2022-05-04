// const [[N,M],...input] = '5 4\n0 1\n1 2\n2 3\n3 4'.toString().split('\n').map(v => v.split(' ').map(Number));
const [[N,M],...input] = '8 8\n1 7\n3 7\n4 7\n3 4\n4 6\n3 5\n0 4\n2 7'.toString().split('\n').map(v => v.split(' ').map(Number));
const [[N,M],...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(v => v.split(' ').map(Number));

const adjList = Array.from({length:N}, ()=> new Array(0));
const visit = new Array(N).fill(0);
let flag = 0;

for(let i=0; i<M; i++){
    let [a,b] = input[i];
    adjList[a].push(b);
    adjList[b].push(a);
}
// console.log(adjList);

function dfs(n, cnt){
    if(flag) return;
    visit[n] = 1;
    if(cnt === 4){
        flag = 1;
        return ;
    }
    for(let i=0; i<adjList[n].length; i++){
        if(!visit[adjList[n][i]]){
            dfs(adjList[n][i], cnt+1);
        }
    }
    visit[n] = 0;
}

for(let i=0; i<N; i++){
    dfs(i, 0);
    if(flag) break;
}

console.log(flag);
//이 문제의 포인트는 인접행렬과 인접리스트의 차이점을 아는것이다.
//또한 인접리스트의 구현속도가 훨씬 더 빠르다.