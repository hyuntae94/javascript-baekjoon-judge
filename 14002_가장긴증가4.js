// const [N, input] = require('fs').readFileSync('./dev/stdin').toString().trim()
// .map((v,i) => i === 0 ? +v : v.split(' ').map(Number));


const [N, input] = '6\n10 20 10 30 20 50'.toString().trim().split('\n')
.map((v,i) => i == 0 ? +v : v.split(' ').map(Number));

const dp = new Array(N).fill(0);
let maxArray = [];

for(let i=0; i<N; i++){
    let max = 0;
    let tmp = [];
    for(let j=0; j<i; j++){
        if (input[i] > input[j] && dp[j] > max){
            max = dp[j];
            tmp.push(input[j])
        }
    }
    tmp.push(input[i])
    dp[i] = max+1;
    maxArray.push(tmp);
}
console.log(`${Math.max(...dp)}\n${maxArray[dp.indexOf(Math.max(...dp))].join(' ')}`);