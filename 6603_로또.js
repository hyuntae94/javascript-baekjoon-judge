let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n')
.map(v => v.split(' ').map(Number).slice(1));
// let input = '7 1 2 3 4 5 6 7\n8 1 2 3 5 8 13 21 34\n0'.split('\n')
//                 .map(v => v.split(' ').map(Number).slice(1));
input.pop();

let answer = '';

function combination(index ,start, tmp,array){
    if (index == 6){
        answer += `${tmp.join(' ')}\n`;
        return ;
    }
    for(let i=start; i<array.length; i++){
        tmp[index] = array[i];
        combination(index+1, i+1, tmp, array);
    }
}

input.forEach((v,i) => {
    combination(0,0,[],v);
    if(input.length - 1 !== i) answer += '\n'
})

console.log(answer.slice(0,-1));