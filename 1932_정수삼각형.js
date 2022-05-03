// let [N,...arr] = "5\n7\n3 8\n8 1 0\n2 7 4 4\n4 5 2 6 5".toString().split('\n')
// .map((val, index) => index == 0 ? +val : val.split(' ').map(Number));

let [N,...arr] = require('fs').readFileSync('./dev/stdin').toString().split('\n')
.map((val, index) => index == 0 ? +val : val.split(' ').map(Number));

const dp = Array.from({length:N}, ()=> new Array(N).fill(0));

dp[0][0] = arr[0][0];

for(let i=1; i<N; i++){
    for(let j=0; j<=i; j++){
        if (j==0) dp[i][j] = dp[i-1][j] + arr[i][j];
        else if (j==i) dp[i][j] = dp[i-1][j-1] + arr[i][j];
        else {
            dp[i][j] = Math.max(dp[i-1][j-1] + arr[i][j] , dp[i-1][j] + arr[i][j]);
        }
    }
}
console.log(Math.max(...dp[N-1]));
//이 문제는 전형적인 Dp문제로 현재값이 최대가 될 수 있는 방법은
//현재 값 이전에 올 수 있는 값과 현재 값을 더해 가장 최대가 되는 값을 저장해주는 방법이다.