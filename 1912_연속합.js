let [N, arr] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((el,idx) => idx === 0 ? +el : el.split(' ').map(Number));
let dp = new Array(N);
dp[0] = arr[0];
for(let i=1; i<N; i++){
    if (dp[i-1] + arr[i] > arr[i]){
        dp[i] = dp[i-1] + arr[i];
        continue;
    }
    dp[i] = arr[i];
}
console.log(Math.max(...dp));