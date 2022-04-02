let input = '3\n1 2 3'.toString().trim().split('\n');
let N = +input[0]
let arr = input[1].split(' ').map(Number);

const visit = new Array(N).fill(false);

let max = Number.MIN_VALUE;

function subValue(array){
    let sum = 0;
    for(let i=0; i<array.length-1;i++){
        sum += Math.abs(array[i]-array[i+1]);
    }
    return sum;
}

function permutation(tmp,index){
    if (index == N){
        max=Math.max(subValue(tmp),max);
        return ;
    }
    for(let i=0; i<N; i++){
        if(!visit[i]){
            visit[i] = true;
            tmp[index] = arr[i];
            permutation(tmp,index+1);
            visit[i]=false;
        }
    }
}
permutation([],0);

console.log(max);