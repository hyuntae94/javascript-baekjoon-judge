// const [[N],input] =`2
// 60 40`.toString().trim().split('\n').map(el => el.split(' ').map(Number));

const [[N],input] =require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));

const scv = [0,0,0];

for(let i=0; i<N; i++){
    scv[i] = input[i];
}

const dp = Array.from({length:61}, ()=> Array.from({length:61}, ()=>new Array(61).fill(0)));


function attack(scv1,scv2,scv3){
    if (scv1 < 0) return attack(0,scv2,scv3);
    if (scv2 < 0) return attack(scv1,0,scv3);
    if (scv3 < 0) return attack(scv1,scv2,0);
    
    if (scv1 === 0 && scv2 === 0 && scv3 === 0){
        return 0;
    }

    if (dp[scv1][scv2][scv3] !== 0) return dp[scv1][scv2][scv3];

    dp[scv1][scv2][scv3] = Number.MAX_SAFE_INTEGER;

    dp[scv1][scv2][scv3] = Math.min(dp[scv1][scv2][scv3], attack(scv1-9,scv2-3,scv3-1)+1)
    dp[scv1][scv2][scv3] = Math.min(dp[scv1][scv2][scv3], attack(scv1-9,scv2-1,scv3-3)+1)
    dp[scv1][scv2][scv3] = Math.min(dp[scv1][scv2][scv3], attack(scv1-1,scv2-3,scv3-9)+1)
    dp[scv1][scv2][scv3] = Math.min(dp[scv1][scv2][scv3], attack(scv1-1,scv2-9,scv3-3)+1)
    dp[scv1][scv2][scv3] = Math.min(dp[scv1][scv2][scv3], attack(scv1-3,scv2-1,scv3-9)+1)
    dp[scv1][scv2][scv3] = Math.min(dp[scv1][scv2][scv3], attack(scv1-3,scv2-9,scv3-1)+1);


    return dp[scv1][scv2][scv3];
}


console.log(attack(scv[0],scv[1],scv[2]))
