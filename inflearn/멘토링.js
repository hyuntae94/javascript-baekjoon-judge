let arr=[[3, 4, 1, 2], [3, 4, 1, 2], [3, 4, 2, 1]];

let combiArray = [];
let tmp = [];

function combi(start, index){
    if(index === 2){
        combiArray.push(tmp.slice());
        return ;
    }
    for(let i=start; i<arr[0].length; i++){
        tmp[index] = arr[0][i];
        combi(i+1,index+1);
    }
}
combi(0,0);

function checkOrder(mentor,mentee,array){
    if(array.indexOf(mentee) < array.indexOf(mentor)) return false;
    return true;
}

function solution(array){
    let answer = 0;
    let flag = 1;

    for(let [mentor,mentee] of combiArray){
        for(let x = 1; x < array.length; x++){
            if(!checkOrder(mentor,mentee,array[x])){
                flag = 0;
                break ;
            }
        }
        if (flag) answer += 1;
        flag = 1;
    }
    return answer;
}

console.log(solution(arr));