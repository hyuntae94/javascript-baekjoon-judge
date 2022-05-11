let [N, K] = '5 17'.toString().split(' ').map(Number);
// let [N, K] = require('fs').readFileSync('./dev/stdin').toString().split(' ').map(Number);

const path = new Array(100001).fill(0);
const visit = new Array(100001).fill(0);

function bfs(param){
    const queue = [[param,0]];
    visit[param] = 1;

    while(queue.length){
        const [search, height] = queue.shift();
        if (search == K) return height;
        for (next of [search-1, search+1, search*2]){
            if (!visit[next] && next >=0 && next <= 100000){
                path[next] = search;
                visit[next] = 1;
                queue.push([next,height+1]);
            }
        }
    }
}

const height = bfs(N);  

const answer = [K];
let prev = path[K];

for(let i=0; i<height; i++){
    answer.push(prev);
    prev = path[prev];
}
console.log(`${height}\n${answer.reverse().join(' ')}`);