const [N,M] = require('fs').readFileSync("./dev/stdin").toString().trim()
                    .split(" ").map(Number);
let arr = [];
let answer = '';

function research(m){
    if (m == 0){
        answer += `${arr.join(" ")}\n`;
        return ;
    }

    for (let x = 1; x <= N; x++){
        arr.push(x);
        research(m-1);
        arr.pop();  
    }
}

research(M);
console.log(answer.trim())
