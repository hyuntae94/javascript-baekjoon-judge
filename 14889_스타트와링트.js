// const start = new Date().getTime();
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

// function totalAbilty(team){
//     let ret = 0;

//     for(let i=0; i<team.length; i++){
//         for(let j=0; j<team.length; j++){
//             ret += input[team[i]][team[j]];
//         }
//     }
//     return ret;
// }

// combiArr.forEach(team => {
//     abilty.push(totalAbilty(team))
// })

// //능력치 중 차이가 가장 작은 값 계산
// let min = Number.MAX_VALUE;
// for (let i=0; i<abilty.length / 2 ; i++){
//     let different = Math.abs(abilty[i]-abilty[abilty.length-1-i]);
//     min = Math.min(min,different);
// }

// console.log(min);
// const end = new Date().getTime();
// console.log(end-start);

const start = new Date().getTime();

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
        console.log(teamA,teamB)
        const scoreA = getScore(map, teamA);
        const scoreB = getScore(map, teamB);
        const diff = Math.abs(scoreA - scoreB);
        min = Math.min(min, diff);
        return;
    }

    teamA.push(id);
    // console.log(teamA);
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
// console.log(result);
const end = new Date().getTime();
console.log(end-start);