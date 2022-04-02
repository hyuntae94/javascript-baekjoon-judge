let variables = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = +variables[0];
let input = [];
for(let i=1; i<variables.length; i++){
    input.push(variables[i].split(' ').map(Number))
}

let visit = new Array(4).fill(0);
let array = [];
for(let i=0; i<N; i++){
    array.push(i);
}
let min = Number.MAX_SAFE_INTEGER;

function cal_routeValue(route){
    let sum = 0;

    if (!input[route[route.length-1]][route[0]]) return Number.MAX_SAFE_INTEGER;
    else sum += input[route[route.length-1]][route[0]];

    for(let i=0; i<route.length-1; i++){
        if (!input[route[i]][route[i+1]]) return Number.MAX_SAFE_INTEGER;
        sum += input[route[i]][route[i+1]];
    }
    return sum;
}

function permutation(tmp,index){
    if(index == N){
        min = Math.min(cal_routeValue(tmp),min);
        return ;
    }
    for(let i=0; i<N; i++){
        if(!visit[i]){
            visit[i] = 1;
            tmp[index] = array[i];
            permutation(tmp,index+1);
            visit[i] = 0;
        }
    }
}
permutation([],0)
console.log(min);
//메모리 10296KB
//시간 544ms