function solution(array){
    let answer = [];
    
    function isPrime(num){
        for(let i=2; i<=parseInt(Math.sqrt(num)); i++){
            if (num % i === 0) return false;
        }
        return num === 1 ? false : true;
    }

    array.forEach(v => {
        let reverseNumber = '';
        for(let i=String(v).length-1;i > -1; i--){
            reverseNumber += String(v)[i];
        }
        if (isPrime(Number(reverseNumber))) answer.push(Number(reverseNumber));
    })

    return answer;
};

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));