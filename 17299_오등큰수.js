const [[N],input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));

const result = new Array(N).fill(-1);
const stack = [];

const map = new Map();
input.forEach((el)=>{
    if (map.has(el)){
        map.set(el, map.get(el)+1);
    } else {
        map.set(el, 1);
    }
})

for(let idx=0; idx<input.length; idx++){
    while(stack.length && map.get(input[stack[stack.length-1]]) < map.get(input[idx])){
        result[stack.pop()] = input[idx];
    }
    stack.push(idx);
}

console.log(...result);