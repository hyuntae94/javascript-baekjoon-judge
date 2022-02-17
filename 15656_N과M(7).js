let input = '4 2\n9 8 7 1'.split('\n').map(x => x.split(' ').map(Number));
let [N,M] = input[0];
let nNumber = input[1].sort((a,b)=>a-b);

let attached = [];
let answer = '';

function sequence(arr, m){
    if (m == 0){
        answer += `${attached.join(' ')}\n`;
        return ;
    }
    for (let x of arr){
        attached.push(x);
        sequence(nNumber, m-1);
        attached.pop();
    }
}

sequence(nNumber, M);
console.log(answer.trim());