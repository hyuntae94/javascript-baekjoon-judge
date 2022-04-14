// const [N, input] = require('fs').readFileSync('./dev/stdin').toString().trim()
// .map((v,i) => i === 0 ? +v : v.split(' ').map(Number));


const [N, input] = '6\n10 20 10 30 20 50'.toString().trim().split('\n')
.map((v,i) => i == 0 ? +v : v.split(' ').map(Number));

const dp = new Array(N).fill(0);

for(let i=0; i<N; i++){
    let max = 0;
    for(let j=0; j<i; j++){
        if (input[i] > input[j] && dp[j] > max){
            max = dp[j];
        }
    }
    dp[i] = max+1;
}
console.log(Math.max(...dp));


