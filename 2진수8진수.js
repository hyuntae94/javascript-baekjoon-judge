// const two = require('fs').readFileSync('./dev/stdin').toString().trim().split('').map(Number);
let two = require('fs').readFileSync('./dev/stdin').toString().trim()
let answer = '';
while (two.length >= 3) {
    answer = parseInt(two.slice(two.length-3), 2).toString(8) + answer;
    two = two.slice(0, two.length-3);
}

if (two.length){
    answer = parseInt(two,2).toString(8) + answer;
}

console.log(answer);
