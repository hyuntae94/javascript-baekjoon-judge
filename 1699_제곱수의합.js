
// let N = +require('fs').readFileSync('./dev/stdin').toString().trim();
let N = +'43'.toString().trim();

// let ret = 0;
// while(N){
//     let root = Math.floor(Math.sqrt(N));
//     console.log(root);
//     N -= Math.pow(root,2);
//     ret += 1;
// }
//위와 같이 풀게되면 가장 큰 제곱수 먼저 계산하여 최소항을 구할 것같지만
//실제로 43을 돌려보면 위의 코드로는 6,2,1,1,1 5개가 나오고
//실제 최소항은 5,3,3 이렇게 3개임.

let dp = new Array(N+1).fill(0).map((_,idx) => idx);
//모든 숫자의 최대항은 1로 만들었을 경우이므로 해당 숫자에는 인덱스의 숫자를 입력.
for(let i=1; i<=N; i++){ 
    for(let j=1; j**2<=i; j++){
        dp[i] = Math.min(dp[i], dp[i-j**2]+1);
    }
}
//예를 들어 i가 8이면 [8-1^2], [8-2^2] 두 가지의 인덱스에서 넘어오는 경우의 수만 고려해주면 된다. 

console.log(dp.pop());
