let [N,k] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);
// let [N,k] = '6 4'.trim().toString().split(' ').map(Number);

const dp = Array.from({length : k}, () => new Array(N+1).fill(1));

for(let row=1; row < k; row++){
    for(let col=0; col<=N; col++){
        dp[row][col] = dp[row-1].slice(0,col+1).reduce((acc,val) => acc+val,0) % 1000000000;
    }
}
console.log(dp[k-1][N]);
//이 문제의 중요한 포인트는 이중dp라는 점이다
//이 문제를 만나기 전까지는 
//일차원 배열의 dp만 존재하는지 알았는데 변수가 2개가 나오면 dp를 이중배열로도 사용할 수 있다는 것을 배움
