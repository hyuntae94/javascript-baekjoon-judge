let [N, arr] = "10\n10 -4 3 1 5 6 -35 12 21 -1" 
.toString().split("\n").map((v,i) =>
// let [n, arr] = "1\n-5".toString().split("\n").map((v,i) =>
// let [n, arr] = require('fs').readFileSync('./dev/stdin').toString().split("\n").map((v,i) =>
i === 0 ? +v : v.split(' ').map(Number));

let answer = 0; //문제 반환값
let dp1 = [arr[0]];
let dp2 = [arr[0]];

for (let i=1; i<N; i++){
    dp1[i] = arr[i] + dp1[i-1] > arr[i] ? arr[i] + dp1[i-1] : arr[i];
}
for (let i=1; i<N; i++){
    dp2[i] = dp1[i-1] > dp2[i-1] + arr[i] ? dp1[i-1] : dp2[i-1] + arr[i];
}

console.log(Math.max(...dp1,...dp2));

//dp2를 구하기가 어려웠다.
//2가지를 생각하면 된다.
//arr배열의 i값을 더해줄 경우
//i값을 더해준다는 것은 이미 앞에서 어떤 숫자를 뺀경우를 의미한다.
//그래서 dp2[i] = dp2[i-1] + arr[i] 를 생각할 수있다.
//arr배열의 i값을 더해주지 않을 경우
//arr[i]값을 더해주지않았기에 dp1[i-1]까지의 값만 생각하면된다.
//즉 dp2[i] = dp1[i-1]이다.

//위와 같이 배열에서 숫자를 빼 최대값을 구하는 문제를 풀기위해서  
//숫자를 빼기 전 모든 숫자의 연속합을 떠올리는 연습을 해야겠다.
//큰그림을 먼저 그리자.