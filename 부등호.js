let input = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
let N = Number(input[0]);
let array = input[1].split(' ');
let numberArray = [0,1,2,3,4,5,6,7,8,9];

let tmp = [];
let answer = [];
function compare(index, arr){
    if (index == 0) return 1;

    let inequalitySignIndex = index - 1;
    if (array[inequalitySignIndex] === '<'){
        if(arr[index-1] < arr[index]) return 1;
        else return 0; 
    }
    else {
        if(arr[index-1] > arr[index]) return 1;
        else return 0;
    }
}

function combi(index, arr){
    if (index == N+1){
        answer.push(tmp.slice().join(''));
        return ;
    }
    for(let i=0; i<arr.length; i++){
        tmp[index] = arr[i];
        if (compare(index,tmp)) {
            combi(index+1, [...arr.slice(0,i), ...arr.slice(i+1)])
        }
    }
}
combi(0,numberArray)
console.log(answer[answer.length-1]);
console.log(answer[0]);

