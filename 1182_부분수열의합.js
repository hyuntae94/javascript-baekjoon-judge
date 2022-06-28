// const [[N,S],input] = '5 0\n-7 -3 -2 5 8'.toString()
const [[N,S],input] = require('fs').readFileSync('./dev/stdin',).toString()
.split('\n').map(el => el.split(' ').map(Number));


let answer = 0;

function combi(start, index, array,findIndex)
{
    if(index == findIndex)
    {
        // console.log(array);
        if ( array.reduce((acc,val)=> acc+val,0) == S) answer += 1;
        return ;
    }

    for(let i=start; i<input.length; i++)
    {
        array[index] = input[i];
        combi(i+1, index+1, array,findIndex);
    }
}


for(let i=1; i<=N; i++)
{
    combi(0,0,[],i);
}
console.log(answer);