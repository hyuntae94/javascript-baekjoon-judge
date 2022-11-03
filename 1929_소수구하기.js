const visited = new Array(1001).fill(-1);
const [start,end] = require('fs').readFileSync('./dev/stdin').toString().split(' ').map(Number);
const check = new Array(end+1).fill(true);
const answer = [];

check[0] = false;
check[1] = false;

const isPrime = (start, end) => {
    for(let x=2; x <= parseInt(Math.sqrt(end)); x++){
        if (check[x]){
            let m = 2;
            while(x*m <= end){
                check[x*m] = false;
                m++;
            }
        }
    }
    
    for(let i=start; i<=end; i++){
        if (check[i]) answer.push(i);
    }

    return answer.join('\n');
}

console.log(isPrime(start,end));

