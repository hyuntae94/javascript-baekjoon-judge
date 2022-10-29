// const input = +'10'.toString().trim();
const input = +require('fs').readFileSync('./dev/stdin').toString().trim();
const array = [1,5,10,50];
const dp = new Array(1001).fill(0);
let count = 0;

function combi(start,idx,sum){
    if (idx === input){
        if (!dp[sum]){
            dp[sum] = 1;
            count++;
        }
        return ;
    }

    for(let i=start; i<array.length; i++){
        sum += array[i];
        combi(i,idx+1,sum)
        sum -= array[i];
    }
}
combi(0,0,0);

console.log(count);