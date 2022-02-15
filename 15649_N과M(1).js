const [N,M] = require('fs').readFileSync("./dev/stdin").toString().trim()
                    .split(" ").map(Number);

function permutation(array, select){
    let answer = [];
    if (select == 1) return array.map(x => [x]);

    array.forEach((v, i) => {
        let rest = [...array.slice(0,i), ...array.slice(i+1)]
        let permutations = permutation(rest, select-1);
        let attached = permutations.map(x => [v,...x]);
        answer.push(...attached);
    })
    return answer;
}

let array = [];
for (let i = 1; i <= N; i++){
    array.push(i)
}


let answer = permutation(array,M);

for (let item of answer){
    console.log(...item)
}