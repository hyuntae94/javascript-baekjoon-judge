let input = require('fs').readFileSync("./dev/stdin").toString().trim().split('\n').map(v => v.split(' ').map(Number));
let [N] = input.shift();
let startTeam = [];
let linkTeam = [];
let min = Number.MAX_SAFE_INTEGER;


function teamTotalAbility(input,team){
    let ret = 0;

    for(let i=0; i<team.length; i++){
        for(let j=0; j<team.length; j++){
            ret += input[team[i]][team[j]];
        }
    }
    return ret;
}


function randomTeam(member){
    if(member == N){
        if(!(startTeam.length && linkTeam.length)) return ;
        
        let startTeamAbility = teamTotalAbility(input,startTeam);
        let linkTeamAbility = teamTotalAbility(input,linkTeam);
        min = Math.min(min, Math.abs(startTeamAbility-linkTeamAbility));
        return ;
    }
    startTeam.push(member);
    randomTeam(member+1);
    startTeam.pop();

    linkTeam.push(member);
    randomTeam(member+1);
    linkTeam.pop();
}

randomTeam(0);
console.log(min);