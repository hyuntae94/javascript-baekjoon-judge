const [[T],first,arr1,second,arr2] = `5
4
1 3 1 2
3
1 3 2`.toString().split('\n').map(el => el.split(' ').map(Number));
// const [[T],first,arr1,second,arr2] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));

let answer = 0;

const X = arr1.reduce((acc,val,idx) => {
    acc.push(acc[idx]+val);
    return acc;
},[0]);
const Y = arr2.reduce((acc,val,idx)=>{
    acc.push(acc[idx]+val);
    return acc;
},[0]);

const A = new Map();

for(let i=0; i<X.length-1; i++){
    for(let j=i+1; j<X.length; j++){
        const sum = T - (X[j]-X[i]);

        if (!A.has(sum)) A.set(sum,1);
        else A.set(sum, A.get(sum)+1);
    }
}

for(let i=0; i<Y.length-1; i++){
    for(let j=i+1; j<Y.length; j++){
        const sum = Y[j]-Y[i];
        const count = A.get(sum);
        if(count > 0){
            answer += count;
        }
    }
}

console.log(answer);