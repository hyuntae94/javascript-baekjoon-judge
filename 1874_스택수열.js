const [N, ...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(Number);

const answer = [];
const stack = [];
let start = 0;

for(let i=1; i<=N; i++){
    stack.push(i);
    answer.push('+');
    while (stack.length && stack[stack.length-1] === input[start]){
        stack.pop();
        answer.push('-');
        start += 1;
    }
}

stack.length ? console.log('NO') : console.log(answer.join('\n'));