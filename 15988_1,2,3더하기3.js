let input = '3\n4\n7\n10'.toString().trim().split('\n').map(Number);
dp = [0,1,2,4]

let ret = '';

for(let i=4; i<=Math.max(...input); i++){
    dp[i] = (dp[i-1]+dp[i-2]+dp[i-3]) % 1000000009;
}

for(let i=1; i<=input[0]; i++){
    ret += `${dp[input[i]]}\n`;
}
console.log(ret.trimEnd());
