const [N, NumberArray, operationsArray] = '6\n1 2 3 4 5 6\n2 1 1 1'.toString()
// const [N, NumberArray, operationsArray] = require('fs').readFileSync('./stdin/dev').toString()
.split('\n').map((el,idx)=> idx === 0 ? +el : el.split(' ').map(Number));

const operations = [];
operationsArray.map((el,idx) => {
    if (idx === 0){
        for(let i=0; i<el; i++) operations.push('+');
    } else if (idx === 1) {
        for(let i=0; i<el; i++) operations.push('-');
    } else if (idx === 2) {
        for(let i=0; i<el; i++) operations.push('*');
    } else {
        for(let i=0; i<el; i++) operations.push('/');
    }
})

const visited = new Array(operations.length).fill(0);
const answer = [];

const sum = (a,b) => {
    return a+b;
}
const sub = (a,b) => {
    return a-b;
}
const mul = (a,b) => {
    return a * b;
}
const div = (a,b) => {
    return parseInt(a/b);
}

function calculator(opers){
    const ret = NumberArray.reduce((acc,val,idx) => {
       if(opers[idx-1] === '+') return sum(acc,val);
       else if (opers[idx-1] === '-') return sub(acc,val);
       else if (opers[idx-1] === '*') return mul(acc,val);
       else if (opers[idx-1] === '/') return div(acc,val);
    })
    answer.push(ret);
}

function permu(tmp, index){
    if (index === operations.length){
        calculator(tmp);
        return ;
    }
    for (let i=0; i<operations.length; i++){
        if (!visited[i]){
            tmp[index] = operations[i];
            visited[i] = 1;
            permu(tmp,index+1);
            visited[i] = 0;
        }
    }
}

permu([],0);
console.log(`${Math.max(...answer)}\n${Math.min(...answer)}`);

