const N = 80;

let dp = [0,1];

for(let i=1; i<N; i++){
    let countZero = dp[0];
    let countOne = dp[1];
    let tmp = [0n,0n];
    if(countZero) {
        tmp[0] += BigInt(countZero);
        tmp[1] += BigInt(countZero);
    }

    if(countOne){
        tmp[0] += BigInt(countOne);
    }

    dp[0] = tmp[0];
    dp[1] = tmp[1];

}

console.log((dp[0]+dp[1]).toString());