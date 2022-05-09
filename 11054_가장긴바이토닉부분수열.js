let [N,arr] = require('fs').readFileSync('./dev/stdin').toString().split('\n')
.map((val,idx)=> idx === 0 ? +val : val.split(' ').map(Number));

const frontDp = new Array(N).fill(0);
const backDp = new Array(N).fill(0);
frontDp[0] = 1;
backDp[backDp.length-1] = 1;

for(let i=1; i<N; i++){
    for(let j=0; j<i; j++){
        if (arr[i] > arr[j] && frontDp[j] > frontDp[i]){
            frontDp[i] = frontDp[j];
        }
    }
    frontDp[i] += 1;
}

for(let i=N-2; i>=0; i--){
    for(let j= N-1; i<j; j--){
        if (arr[i] > arr[j] && backDp[j] > backDp[i]){
            backDp[i] =backDp[j];
        }
    }
    backDp[i] += 1;
}

let answer = frontDp.map((v,idx) => v + backDp[idx]);

console.log(Math.max(...answer) - 1);