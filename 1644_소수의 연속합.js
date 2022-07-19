//소수판별

// const N = +'53'.toString();
const N = +require('fs').readFileSync('./dev/stdin').toString();

const primeArray = [];

function validPrime(param){
    if (param === 1) return false;
    if (param === 2 || param === 3) return true;

    let root = Math.floor(Math.sqrt(param));

    for (let i=2; i<=root; i++){
        if (param % i === 0) return false;
    }
    return true;
}

for(let number=1; number<=N; number++){
    if (validPrime(number)) primeArray.push(number);
}//소수만 들어있는 배열
if (!primeArray.length) {
    console.log(0);
    return ;
}

let answer = 0;
let [front,back] = [0,0];
let sum = primeArray[0];

while(front < primeArray.length){
    // console.log(front,back);
    if (sum < N){
        front++;
        sum += primeArray[front];
    }
    else if (sum > N){
        sum -= primeArray[back];
        back++;
    }
    else if (sum === N){
        front++;
        sum += primeArray[front];
        sum -= primeArray[back];
        back++;

        answer += 1;
    }
}

console.log(answer);

//N=20이라 가정
//1부터 20까지 소수만 가지고 계산
//일단 1부터 소수판별
//소수이면 -> 배열에 넣고 총합 누적
//소수가 아니면 패스 
