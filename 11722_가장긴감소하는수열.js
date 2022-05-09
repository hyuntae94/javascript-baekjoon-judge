let [N,arr] = require('fs').readFileSync('./dev/stdin').toString().split('\n')
.map((val,idx)=> idx === 0 ? +val : val.split(' ').map(Number));



const dp = new Array(N).fill(0);
dp[0] = 1;

for(let i=1; i<N; i++){
    for(let j=0; j<i; j++){
        if (arr[j] > arr[i] && dp[j] > dp[i]){
            dp[i] = dp[j];
        }
    }
    dp[i] += 1;
}
console.log(Math.max(...dp));