const [[n, k], ...input] = `3 10
1
2
5`.toString().split("\n").map((el, idx) => (!idx ? el.split(" ").map(Number) : +el));
// const [[n, k], ...input] = require('fs').readFileSync('./dev/stdin').toString().split("\n").map((el, idx) => (!idx ? el.split(" ").map(Number) : +el));
const dp = new Array(k + 1).fill(0);
dp[0] = 1;

for(let i=0; i<n; i++){
    for(let j=input[i]; j<=k; j++){
        dp[j] += dp[j-input[i]];
    }
}
console.log(dp[k]);