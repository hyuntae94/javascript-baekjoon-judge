const [N,k] = require('fs').readFileSync('./dev/stdin').toString().split(' ').map(Number);
const array = new Array(N).fill(null).map((_,idx)=>idx+1);
const answer = [];
let idx = 0;
while(array.length){
    idx += k-1;
    idx %= array.length;
    answer.push(...array.splice(idx,1));
}
console.log('<'+answer.join(', ')+'>');
