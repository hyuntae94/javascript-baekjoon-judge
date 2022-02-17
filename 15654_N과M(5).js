// // const [N,M] = require('fs').readFileSync("./dev/stdin").toString().trim()
// //                     .split(" ").map(Number);
let input = '7 4\n7 6 5 4 3 2 1'.split('\n').map(x => x.split(' ').map(Number));
let [N,M] = input[0];
let nNumber = input[1].sort((a,b)=>a-b);

let attached = [];
let answer = '';

function research(arr, m){
    if (m == 0){
        answer += `${attached.join(" ")}\n`;
        return ;
    }
    let idx = 0;
    
    for (let x of arr){
        attached.push(x);
        let arr2 = [...arr.slice(0, idx), ...arr.slice(idx+1)];
        research(arr2,m-1);
        attached.pop();
        idx += 1;  
    }
}

research(nNumber,M);
console.log(answer.trim())