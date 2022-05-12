const [K,...matrix] = '2\n3 2\n1 3\n2 3\n4 4\n1 2\n2 3\n3 4\n4 2'.toString()
// const [K,...matrix] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(v => v.split(' ').map(Number));

const RED = 1;
const BLUE = -1;

let begin = 0;
function bfs(node, color){
    let queue = [node];
    visit[node] = color;
    
    let idx = 0;
    while (idx < queue.length  && !flag){
        let next = queue[idx++];
        // console.log(next);
        for (let i=0; i<adjNode[next].length; i++){
            //인접한 노드가 방문하지 않은 노드라면
            if (!visit[adjNode[next][i]]){
                queue.push(adjNode[next][i]); // 큐에 삽입
                visit[adjNode[next][i]] = visit[next] * - 1;//인접노드와 다른색으로 색칠
            }
            //인접한 노드가 방문한 노드이고 이전노드와 색이 같다면
            else if (visit[next] == visit[adjNode[next][i]]){
                flag = 1;
                return ;
            }
        }
    }
}    
while (begin !== matrix.length){
    let tmp = [];
    let [V,E] = matrix[begin];
    for (let i=begin+1; i<begin+E+1; i++){
        tmp.push(matrix[i]);
    }
    const adjNode = Array.from({length:V+1}, ()=>new Array);
    const visit = new Array(V+1).fill(0);

    for (let i=0; i<E; i++){
        const [u,v] = tmp[i];
        adjNode[u].push(v);
        adjNode[v].push(u);
    }

    let flag = 0;

    for (let i=1; i<=V; i++){
        if (!visit[i]){
            bfs(i,BLUE);
            if (flag) break;
        }
    }

    console.log(flag ? "NO" : "YES");
    
    // function dfs(node, color){
    //     visit[node] = color;
    
    //     for (let i=0; i<adjNode[node].length; i++){
    //         //방문하지 않은 노드일 경우 색 추가
    //         if (!visit[adjNode[node][i]]){
    //             dfs(adjNode[node][i],-color);
    //         }
    //         //방문한 노드일 경우 위의 노드 색과 비교하여 같은 색이면 종료
    //         //아니면 계속진행
    //         if (visit[adjNode[node][i]] == color){
    //             flag = 1;
    //             return ;
    //         }
    //     }
    // }
    
    begin += E+1;    
}
