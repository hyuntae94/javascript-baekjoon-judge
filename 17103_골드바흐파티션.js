const N = 10000000;
const checkList = new Array(N+1).fill(1);

checkList[0] = 0;
checkList[1] = 0;

for(let i=2; i<= Math.sqrt(N); i++){
    if (checkList[i] === 1){
        let j = 2;
        while(i*j <= N){
            checkList[i*j] = 0;
            j++;
        }
    }
}

const primeNumber = [];
checkList.forEach((el,idx)=> {
    if (el) primeNumber.push(idx);
})
const inputArr = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(Number);
inputArr.shift();
let input = Math.max(...inputArr);
const findPrime = [];

for(let i=0; i<primeNumber.length; i++){
    if (input < primeNumber[i]) {
        findPrime.push(primeNumber[i]);
        break ;
    }
    findPrime.push(primeNumber[i]);
}
// console.log(findPrime);

const answer = [];
inputArr.forEach((number)=>{
    let count =0;
    let findIdx = findPrime.findIndex(el => number <= el) - 1;
    let start = 0;
    let end = findIdx;
    let sum = findPrime[start] + findPrime[end];
    while (start <= end){
        if (sum > number){
            sum -= findPrime[end--];
            sum += findPrime[end];
        } else if (sum < number){
            sum -= findPrime[start++];
            sum += findPrime[start];
        } else if (sum === number){
            count += 1;
            sum -= findPrime[end--];
            sum += findPrime[end];
        }
    }
    answer.push(count);
})
console.log(answer.join('\n'));
