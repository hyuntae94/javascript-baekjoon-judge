const input ='7\n3 10\n5 20\n1 10\n1 20\n2 15\n4 40\n2 200'.toString().trim().split('\n').map(v=>v.split(' ').map(Number));
const [N] = input[0];
const schedule = [];
for (let i=1; i<input.length; i++){
    schedule.push(input[i])
}

let max = -1;

function recursive(curIndex, pay){
    if (pay > max) max = pay;

    for (let idx=curIndex; idx<N; idx++){
        if (idx + schedule[idx][0] <= N){
            recursive(idx+schedule[idx][0], pay+schedule[idx][1])
        }
    }
}

recursive(0,0);

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
// const n = +(input.shift());
// const dp = Array(n + 1).fill(0);
// let mx = -1;
// for (let i = 0; i < n; i += 1) {
//     const [t, p] = input[i].trim().split(' ').map(Number);
//     if (i + t <= n) dp[i + t] = Math.max(dp[i + t], dp[i] + p);
//     dp[i + 1] = Math.max(dp[i + 1], dp[i]);
//     mx = Math.max(mx, dp[i + 1]);
// };
// console.log(mx);
