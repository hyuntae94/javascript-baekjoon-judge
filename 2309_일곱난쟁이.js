// const fs = require('fs');
// const input = fs.readFileSync("./dev/stdin")
//                 .toString()
//                 .trim()
//                 .split('\n')
//                 .map(Number)
//                 .sort((a,b)=>a-b);
//조합
function combi(array, select){

    let answer = [];
    if (select === 1) return array.map(v => [v]);

    array.forEach((v,i) => {
        let rest = array.slice(i+1);
        let combi1 = combi(rest, select-1);
        let combi2 = combi1.map(x => [v,...x]);
        answer.push(...combi2);
    })
    return answer;
};

const answer = combi(input,7);
for (let x of answer){
    if (x.reduce((a,b)=>a+b) === 100){
        console.log(...x)
        break ;
    }
}