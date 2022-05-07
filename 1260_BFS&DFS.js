let [[N,M,V],...matrix] = '4 5 1\n1 2\n1 3\n1 4\n2 4\n3 4'.toString()
// let [[N,M,V],...matrix] = '5 5 3\n5 4\n5 2\n1 2\n3 4\n3 1'.toString()
// let [[N,M,V],...matrix] = '1000 1 1000\n999 1000'.toString()
// let [[N,M,V],...matrix] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(v => v.split(' ').map(Number));


let adjNode = Array.from({length:N+1}, ()=>new Array());//인접노드생성
let visit = new Array(N+1).fill(0);//방문확인 변수

for (let x of matrix){
    let [a,b] = x;
    adjNode[a].push(b);
    adjNode[b].push(a);
}
adjNode.map((v,idx) => idx === 0 ? v : v.sort((a,b) => a-b));

for (let i=1; i<adjNode.length; i++){
    adjNode[i] = [...new Set(adjNode[i])]
}

let answer = ''; //결과값

//DFS
let dfs = [];

function DFS(node){
    visit[node] = 1;
    
    dfs.push(node);

    for(let i=0; i<adjNode[node].length; i++){
        if (!visit[adjNode[node][i]]){
            DFS(adjNode[node][i]);
        }
    }
}
DFS(V);
answer += dfs.join(' ');
//BFS
let queue = [...adjNode[V]];
visit = new Array(N+1).fill(0);
visit[V] = 1;
let idx = 0;
answer += `\n${V}`;
while(queue[idx]){//큐에 노드가 없을 때까지
    let node = queue[idx++];//노드를 하나 가져온다.

    if (visit[node]) continue; //해당 노드가 방문처리 되있으면 그냥 다음 노드가져온다.

    visit[node] = 1; //가져온 노드를 방문처리해준다.
    
    for (let i=0; i<adjNode[node].length; i++){
    //가져온 노드에서 갈 수 있는 다음 노드들을 큐에 푸쉬해준다.
    //단, 아직 방문하지 않은 노드만!!
        let hasNode = adjNode[node][i];

        if (!visit[hasNode]) queue.push(hasNode); //아직 방문하지 않았다면 큐에 추가
    }
    answer += ` ${node}`;
}

console.log(answer);


