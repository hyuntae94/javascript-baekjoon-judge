// const [[n,k],...input] = `4 7
// 6 13
// 4 8
// 3 6
// 5 12`.toString().split('\n').map(el => el.split(' ').map(Number));
const [[n,k],...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const list = [{
    v:0,
    w:0,
}]
input.forEach(el => (
    list.push({w : el[0],v :el[1] })
))

const dp = Array.from( {length : n+1}, () => new Array(k+1).fill(0))

for(let i=1; i<=n; i++){
    for(let j=1; j<=k; j++){
        if (list[i].w <= j ){//i번째 물건이 배낭최대치무게보다 작을 경우
            dp[i][j] = Math.max(list[i].v + dp[i-1][j-list[i].w], dp[i-1][j]);
        } else if (list[i].w > j){//i번째 물건이 배낭최대치무게보다 클 경우
            dp[i][j] = dp[i-1][j];
        }
    }
}

console.log(dp[n][k]);