const [N, input] = '10\n1 2 0 1 3 2 1 5 4 2'.toString()
// const [N, input] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map((el,idx)=> idx === 0 ? +el : el.split(' ').map(Number));

const visited = new Array(10).fill(-1);
visited[0]= 0 ;


for(let i=1; i<N; i++){
    for(let j=0; j<i; j++){
        if (visited[j] !== - 1 && i-j <= input[j]){
            if (visited[i] === -1 || visited[i] > visited[j] + 1){
                visited[i] = visited[j] + 1;
            }
        }
    }
}

console.log(visited[N-1]);