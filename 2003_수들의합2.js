// const [[N, M], input] = '2 1\n1 1'
const [[N, M], input] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n').map(v => v.split(' ').map(Number));
// console.log(N,M,input);

let answer = 0;
let sum = 0;
const _sum = (tot,start,end) => {

    if (tot === M) answer += 1;
    
    while (end+1 < input.length){
        tot += input[end+1] - input[start];
        if (tot === M) answer += 1;
        end += 1;
        start += 1;
    }
}


for (let i=1; i<=N; i++){
    sum += input[i-1];
    _sum(sum,0,i-1);
}
console.log(answer);