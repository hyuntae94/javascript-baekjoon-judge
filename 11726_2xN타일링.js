const N = +require('fs').readFileSync('./dev/stdin').toString().trim();

const dp = [0,1,2];

for(let i=3; i<=N; i++){
    dp[i] = (dp[i-1] + dp[i-2])%10007
}
console.log(dp[N])