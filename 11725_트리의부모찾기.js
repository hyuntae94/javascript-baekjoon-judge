// const [[N],...input] = require('fs').readFileSync('./dev/stdin').toString().split("\n").map((el) => el.split(" ").map(Number));
const [[N],...input] = `12
1 2
1 3
2 4
3 5
3 6
4 7
4 8
5 9
5 10
6 11
6 12`.toString().split("\n").map((el) => el.split(" ").map(Number));
const nodeList = new Array(N+1).fill(null);
const visited = new Array(N+1).fill(false);
const adjList = Array.from({length:N+1}, () => new Array());
// console.log('nodeList : ' , nodeList);
// console.log('visited : ' , visited);
// console.log('adjList : ' , adjList);
input.forEach(el => {
    const [a,b] = el;
    adjList[a].push(b);
    adjList[b].push(a);
});

visited[0] = true;

const dfs = (node) => {

    //방문했으면 종료
    if (visited[node]) return ;

    visited[node] = true;
    //방문안했으면 탐색
    //해당 배열인덱스에 출발 노드 값 삽입
    for(let i=0; i<adjList[node].length; i++){
        if (!visited[adjList[node][i]]) nodeList[adjList[node][i]] = node;
        dfs(adjList[node][i]);
    };
};

dfs(1);

console.log(nodeList.slice(2).join('\n'));
