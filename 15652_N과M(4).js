// const [N,M] = require('fs').readFileSync("./dev/stdin").toString().trim()
//                     .split(" ").map(Number);
const [N,M] = [4,2]
let arr = [];
let answer = '';

function research(start, m){
    if (m == 0){
        answer += `${arr.join(" ")}\n`;
        return ;
    }

    for (let x = start; x <= N; x++){
        arr.push(x);
        research(x,m-1);
        arr.pop();  
    }
}

research(1,M);
console.log(answer.trim())
