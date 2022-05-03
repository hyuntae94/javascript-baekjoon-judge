// const dp = Array.from({ length: 2}, () => new Array(5+1).fill(1));
dp = [];
for(let i=0;i<=3;i++){
    dp.push(new Array(4).fill(0));
}
console.log(dp[1]==dp[2]);
