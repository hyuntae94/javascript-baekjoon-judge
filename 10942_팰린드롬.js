// 7
// 1 2 1 3 1 2 1
// 4
// 1 3
// 2 5
// 3 3
// 5 7
const [input1,input2,input3,...input4] = '10\n1 2 5 3 2 1 3 1 2 1\n4\n1 4\n2 5\n3 3\n1 7'.toString()
// const [input1,input2,input3,...input4] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n');

const N = +input1;
const numbers = input2.split(' ').map(Number);
const M = +input3;
const questions = input4.map(el => el.split(' ').map(Number));

let dic = {};

for(let i =0; i<N-1; i+=1){
    if(numbers[i] === numbers[i+1]) dic[`${i},${i+1}`] = 1;
    else dic[`${i},${i+1}`] = 0;
}

for(let i =0; i<N-2; i+=1){
    if(numbers[i] === numbers[i+2]) dic[`${i},${i+2}`] = 1;
    else dic[`${i},${i+2}`] = 0;
}

function dp(x,y){
    if(dic[`${x},${y}`] == 0 || dic[`${x},${y}`] == 1 ) return (dic[`${x},${y}`]);
    else {
        if (dp[x+1,y-1] && numbers[x] === numbers[y]){
            dic[`${x},${y}`] = 1;
            return 1;
        } else {
            dic[`${x},${y}`] = 0;
            return 0;
        }
    }
}

let answer = [];

for(let question of questions){
    const [S,E] = question
    
    if (S === E) {
        answer.push(1);
    }
    else {
        answer.push(dp(S-1,E-1));
    }
}
console.log(answer.join('\n'));



