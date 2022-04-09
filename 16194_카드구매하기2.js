let [N, input] = require('fs').readFileSync('./dev/stdin').toString().trim().
                     split('\n').map((v,i)=> i===0 ? +v : v.split(' ').map(Number));

const dp = new Array(N+1).fill(0);
const p = [0,...input];

dp[1] = p[1];

for(let i=2; i<=N; i++){
    dp[i] = p[i];
    for(let j=1; j<=i; j++){
        dp[i] = Math.min(dp[i], p[j]+dp[i-j]);
    }
}
console.log(dp[N])
//메모리 9964kb
//시간 188ms