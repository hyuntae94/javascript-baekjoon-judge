// const array = ''.toString().trim();
// console.log(Number(array));

//소수판별함수
const isPrime = (number) => {
    for (let i=2; i<=Math.sqrt(number); i++){
        if (number % i === 0) return false;
    }
    if (number === 1) return false;
    return true;
}

// 두소수로 나타낼수 있는가?
const isPrimeDoubleCheck = (number) => {
    if (number <= 4 || number % 2 !== 0) return ;
    let minPrime = 0,
        maxPrime = 0;

    for (let i=3; i<=number/2; i++){
        if (isPrime(i)){
            if (isPrime(number-i)){
                minPrime = i,
                maxPrime = number-i;
                break ;
            }
        }
    }
    if (minPrime === 0){
        console.log('Goldbach`s conjecture is wrong.');
        return ;
    }
    console.log(`${number} = ${minPrime} + ${maxPrime}`)
}

for (let x of array){
    isPrimeDoubleCheck(x);
}