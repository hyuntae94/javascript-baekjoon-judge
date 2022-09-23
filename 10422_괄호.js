const [N,...input]=`3
1
2
4`.toString().trim().split('\n').map(Number);
// const [N,...input]= require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);

const dp = new Array(2501).fill(0);
dp[0]=1;
dp[1]=1;


for(let i=2; i<=2500;i++){
    for(let j=0; j<=i-1;j++){
        dp[i] = (dp[i]+dp[j]*dp[i-1-j]) % 1000000007;
    }
}

const answer = [];
for(let i=0; i<N; i++){
    input[i] % 2 === 0 ? answer.push(dp[input[i]/2]) : answer.push(0);
}
console.log( answer.join('\n'))