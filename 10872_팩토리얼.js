// let N = +require('fs').readFileSync('./dev/stdin').toString().trim();
// const [n,m] = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);
const [n,m] = `25 10`.toString().trim().split(' ').map(Number);

const zeroCount = (num,power) => {
    let answer = 0;
    while(num>=power){
        answer += parseInt(num/power);
        num /= power;
    }
    return answer;
}
const two = zeroCount(n,2) - zeroCount(n-m,2)-zeroCount(m,2)
const five = zeroCount(n,5) - zeroCount(n-m,5)-zeroCount(m,5)
console.log(Math.min(two,five));