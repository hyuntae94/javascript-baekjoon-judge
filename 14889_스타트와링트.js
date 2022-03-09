// let input = '4\n0 1 2 3\n4 0 5 6\n7 1 0 2\n3 4 5 0'.toString().trim().split('\n').map(v => v.split(' ').map(Number));
// let N = input.shift();

// //조합
// let combiArr = [];

// function combi1(curNum,array){
//     if (array.length == N/2){
//         combiArr.push(array.slice());
//         return ;
//     }
//     for (let i=curNum; i<N; i++){
//         array.push(i);
//         combi1(i+1,array);
//         array.pop();
//     }
// }
// combi1(0,[]);
// let abilty = [];

// combiArr.forEach(v => {
//     let arr = v; 

//     let answer = [];
//     let ret = [];

//     function combi(index,start){
//         if(index == 2){
//             answer.push(ret.slice());
//             return ;
//         }

//         for(let i=start; i<v.length; i++){
//             ret[index] = arr[i];
//             combi(index+1,i+1);
//         }
//     }
//     combi(0,0)
//     let totalAbilty = 0;

//     answer.forEach((v) => {
//         totalAbilty += input[v[0]][v[1]] + input[v[1]][v[0]];
//     })
//     abilty.push(totalAbilty);
// })
// //능력치 중 차이가 가장 작은 값 계산
// let min = 999999999999999;
// console.log(abilty);
// for (let i=0; i<abilty.length / 2 ; i++){
//     let different = Math.abs(abilty[i]-abilty[abilty.length-1-i]);
//     min = Math.min(min,different);
// }

// console.log(min);

// let fs = require('fs');

let memberAmount = 0, min = Number.MAX_VALUE;
let map = [], teamA = [], teamB = [];

const getScore = (map, team) => {
    let score = 0;
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
            score += map[team[i]][team[j]];
        }
    }
    return score;
}

const go = (id) => {
    if (id == memberAmount) {
        
        if (teamA.length != memberAmount / 2) return;

        const scoreA = getScore(map, teamA);
        const scoreB = getScore(map, teamB);
        const diff = Math.abs(scoreA - scoreB);
        min = Math.min(min, diff);
        return;
    }

    teamA.push(id);
    go(id + 1);
    teamA.pop();

    teamB.push(id);
    go(id + 1);
    teamB.pop();
}

const solution = (input) => {
    memberAmount = Number(input[0]);
    for (let i = 1; i < input.length; i++) {
        map.push(input[i].split(' ').map((v) => Number(v)));
    }

    go(0);
    return min;
}

const input = '4\n0 1 2 3\n4 0 5 6\n7 1 0 2\n3 4 5 0'.toString().trim().split('\n');
const result = solution(input);
console.log(result);