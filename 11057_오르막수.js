const N = +'3'.toString();
const N = +require('fs').readFileSync('./dev/stdin').toString();

let dp = Array.from( {length : N+1}, () => new Array(10).fill(1));
for(let i=2; i <= N; i++){
    for(let j=1; j<10; j++){
        dp[i][j] = (dp[i][j-1] + dp[i-1][j]) % 10007;
    }
}
console.log(dp[N].reduce((acc,val) => acc+val,0) % 10007);
//이 문제의 포인트는 마지막이 0,1,2,..,9으로 끝나는 경우의 수를 각각 따져
//앞의 자릿수와의 관계식을 떠올릴 수 있어야한다.

