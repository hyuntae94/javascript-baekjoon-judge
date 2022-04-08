let [N,input] = require('fs').readFileSync('./dev/stdin').toString().trim()
                    .split('\n').map((v,i) => i == 0 ? +v : v.split(' ').map(Number));

let dp= new Array(N+1).fill(0);
let p = [0, ...input];

for(let i=1; i<=N; i++){
    for(let j=1; j<=i; j++){
        dp[i] = Math.max(dp[i], p[j]+dp[i-j])
    }
}
console.log(dp[N])