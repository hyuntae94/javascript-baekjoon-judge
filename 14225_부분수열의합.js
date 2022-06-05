const [N, input] = '1\n5'
// const [N, input] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n').map((v,i) => i === 0 ? +v : v.split(' ').map(Number));

const sum = input.reduce((acc,val) => acc+val,0);
const visit = new Array(sum+2).fill(0);
visit[0] = 1;
input.forEach(v => visit[v]=1);

function combi(array,start,index,find){

    if (index === find){
        visit[array.reduce((acc,val) => acc+val,0)] = 1;
        return ;
    }

    for (let i=start; i<input.length; i++){
        array[index] = input[i];
        combi(array,i+1,index+1,find);
    }
}

for (let i=2; i<=N; i++){
    combi([],0,0,i);
}
console.log(visit.findIndex(v => v === 0));

