// const [N,...input] = '3\n4\n7\n10'.toString()
const [N,...input] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(el => +el);

const max = Math.max(...input);

const dp = Array.from({length:max+1}, () => new Array(4).fill(0));
console.log(dp);

dp[1][1] = 1;

dp[2][1] = 1;
dp[2][2] = 1;

dp[3][1] = 1;
dp[3][2] = 1;
dp[3][3] = 1;

for(let i=4; i<=max; i++){
    dp[i][1] = dp[i-1][1];
    dp[i][2] = dp[i-2][1] + dp[i-2][2];
    dp[i][3] = dp[i-3][1] + dp[i-3][2] + dp[i-3][3];
}

let answer = [];

for(let x of input){
    answer.push(dp[x][1] + dp[x][2] + dp[x][3]);
}
console.log(answer.join('\n'));