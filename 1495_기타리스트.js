// 3 5 10
// 5 3 7
// const[[N,S,M],list] = `14 40 243
// 74 39 127 95 63 140 99 96 154 18 137 162 14 88`.toString().split('\n').map(el => el.split(' ').map(Number));

const[[N,S,M],list] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));


const visited = Array.from({length : N+1},()=> new Array(M+1).fill(0));
visited[0][S] = 1;

for(let i=1; i<=N; i++){
    for(let j=0; j<=M; j++){
        if (!visited[i-1][j]) continue;

        if (j-list[i-1] >=0){
            visited[i][j-list[i-1]] = 1;
        }
        if (j+list[i-1] <= M){
            visited[i][j+list[i-1]] = 1;
        }
    }
}

let answer = -1;
for(let i=0; i<=M; i++){
    if (visited[N][i]){
        answer = Math.max(answer, i)
    }
}

console.log(answer);