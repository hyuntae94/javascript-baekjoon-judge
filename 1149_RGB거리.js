let [N,...rgb] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map((el,idx) => idx===0 ? +el : el.split(' ').map(Number));
// let [N,...rgb] = '3\n26 40 83\n49 60 57\n13 89 99'.toString().trim().split('\n').map((el,idx) => idx===0 ? +el : el.split(' ').map(Number));

const dp = Array.from( {length: N} , ()=> new Array(3).fill(0));
dp[0][0] = rgb[0][0];
dp[0][1] = rgb[0][1];
dp[0][2] = rgb[0][2];

for(let row=1; row < N; row++){
    dp[row][0] = Math.min(rgb[row][0] + dp[row-1][1], rgb[row][0] + dp[row-1][2]);
    //빨간색집을 칠할 수 있는 경우는 이전에 초록,파랑으로 집을 칠했을 경우
    dp[row][1] = Math.min(rgb[row][1] + dp[row-1][0], rgb[row][1] + dp[row-1][2]);
    //초록색집을 칠할 수 있는 경우는 이전에 빨간,파랑으로 집을 칠했을 경우
    dp[row][2] = Math.min(rgb[row][2] + dp[row-1][0], rgb[row][2] + dp[row-1][1]);
    //파랑색집을 칠할 수 있는 경우는 이전에 빨간,초록으로 집을 칠했을 경우
}
console.log(Math.min(...dp[N-1]));