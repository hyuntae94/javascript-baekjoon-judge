const [[N,S],numbers] = '5 0\n-7 -3 -2 5 8 '.toString()
// const [[N,S],numbers] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map((el)=> el.split(' ').map(Number));
let count = 0;
let _map = new Map();

let pick = [];
function leftDfs(L){
    if(L === parseInt(N/2)){
        const sum = pick.reduce((acc,cur) => acc+cur,0);
        if (!_map.has(sum)) _map.set(sum,1);
        else _map.set(sum, _map.get(sum)+1);
        return ; 
    }
    pick.push(numbers[L])
    leftDfs(L+1);
    pick.pop();
    leftDfs(L+1);
}

pick = [];
function rightDfs(L){
    if(L === N){
        const sum = pick.reduce((acc,cur)=>acc+cur,0);
        if (_map.has(S-sum)){
            count += _map.get(S-sum);
        }
        return ;
    }
    pick.push(numbers[L])
    rightDfs(L+1);
    pick.pop();
    rightDfs(L+1);
}

leftDfs(0);
rightDfs(parseInt(N/2));

if (S === 0) count -= 1;
console.log(count);
