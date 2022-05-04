const [N, arr] = '10\n1 100 2 50 60 3 5 6 7 8'.toString()
.split('\n').map((val,idx) => idx == 0 ? +val : val.split(' ').map(Number));

const [N, arr] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map((val,idx) => idx == 0 ? +val : val.split(' ').map(Number));

dp = [arr[0]];

for(let i=1; i<10; i++){
    dp[i] = arr[i];
    for(let j=0; j<i; j++){
        if (arr[j] < arr[i] && dp[i] < dp[j]+arr[i]){
            dp[i] = dp[j]+arr[i];
        }
    }
}
console.log(Math.max(...dp));
//이 문제의 해결법은 해당 자리에 올 수 있는 최대값을 구하기위해서
//현재 값보다 작은 값들을 찾고 그 작은 값들의 dp값과 현재값을 더해
//가장 큰 값을 찾아 dp에 넣는다.