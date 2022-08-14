const [N, numbers, operNum] = '2\n5 6\n1 1 1 1'.toString()
// const [N, numbers, operNum] = require('fs').readFileSync('./dev/stdin').trim().toString()
.split('\n').map((el,idx)=> idx === 0 ? +el : el.split(' ').map(Number));

let max = Number.MIN_SAFE_INTEGER;
let min = Number.MAX_SAFE_INTEGER;

const operObj = {
    0 : (oper1, oper2) => oper1 + oper2,
    1 : (oper1, oper2) => oper1 - oper2,
    2 : (oper1, oper2) => oper1 * oper2,
    3 : (oper1, oper2) => {
        if (oper1 < 0)
            return -parseInt(-oper1 / oper2);
        return parseInt(oper1 / oper2);
    }
}


function cal(L, val){

    if (L === N-1){
        max = Math.max(val,max);
        min = Math.min(val,min);
        return ;
    }

    for (let i=0; i<4; i++){
        if(!operNum[i]) continue;
        operNum[i] -= 1;
        const next = operObj[i](val, numbers[L+1]);
        cal(L+1, next);
        operNum[i] += 1;
    }

}

cal(0, numbers[0]);

console.log(`${max}\n${min}`);

