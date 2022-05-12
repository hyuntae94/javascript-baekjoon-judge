// const [[N,M],...edge] = "6 8\n1 2\n2 5\n5 1\n3 4\n4 6\n5 4\n2 4\n2 3".toString()
const [[N,M],...edge] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(v => v.split(' ').map(Number));
const adjNode = Array.from({length:N+1}, () => new Array());//인접노드 초기값
const visit = new Array(N+1).fill(0); //방문확인배열 초기값

let answer = 0; //최종리턴값

//인접노드
for (let i=0; i<M; i++){
    const [u,v] = edge[i];
    adjNode[u].push(v);
    adjNode[v].push(u);
}

//1번노드부터 N번노드까지 탐색
//단, 아직 방문하지 않은 노드만!
for (let node=1; node<=N; node++){
    if (!visit[node]){
        dfs(node);
        answer += 1;
    }
}

function dfs(node){
    visit[node] = 1;

    for (let idx=0; idx<adjNode[node].length; idx++){
        if (!visit[adjNode[node][idx]]){
            dfs(adjNode[node][idx]);
        }
    }
}

console.log(answer);


