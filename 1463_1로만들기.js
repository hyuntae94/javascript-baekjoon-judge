// let N = +require('fs').readFileSync('./dev/stdin').toString().trim();
let start = new Date();
let N = +'40000000'.toString().trim();
let arr = new Array(N+1).fill(0);

for(let i=2; i<=N; i++){
    arr[i] = arr[i-1] + 1;
    
    if(i % 2 == 0){
        arr[i] = Math.min(arr[i], arr[i/2] + 1);
    }
    if (i % 3 ==0){
        arr[i] = Math.min(arr[i], arr[i/3] + 1);
    }
}
console.log(arr[N])
let end = new Date();
console.log(end-start);
//N = 40,000,000 -> 9053ms
