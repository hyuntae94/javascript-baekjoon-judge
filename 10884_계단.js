const N = +require('fs').readFileSync('./dev/stdin').toString().trim();
const dp = [[0,1,1,1,1,1,1,1,1,1]];
const MOD = 1000000000;

for(let i=1; i< N; i++){
    dp.push(Array(10).fill(0));
}

for(let i=1; i<N; i++){
    for(let j=0; j<=9; j++){
        dp[i][j] = ((dp[i-1][j-1] || 0) + (dp[i-1][j+1] || 0)) % MOD;
    }
}

console.log(dp[N-1].reduce((acc,value) => acc + value, 0));

