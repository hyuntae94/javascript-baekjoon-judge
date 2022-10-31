const [N, ...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n')

const answer = [];

input.forEach((sentense) => {
    let str = [];
    sentense.split(' ').forEach((word)=>{
        str.push(word.split('').reverse().join(''));
    })
    answer.push(str.join(' '))
});
console.log(answer.join('\n'));