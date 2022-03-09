// function solution(sum, array){
//     let [_sum,answer,end] = [0,0,0];
    
//     for(let start = 0; start <array.length; start++){
//         _sum += array[start];
//         if(_sum === sum) answer += 1;
//         while(_sum >= sum){
//             _sum -= array[end++];
//             if(_sum === sum) answer += 1;
//         }
//     }
//     return answer;
// }

//8개중에 2개고르기
function continueCombi(number,array){
    let choose = number;
    let end = 0;
    let start = end + choose - 1;
    let ret = [];
    //(0,1),(1,2),(2,3),(3,4)
    for(; start<array.length; start++,end++){
        let tmp = [];
        for(let i=end; i<=start; i++){
            tmp.push(array[i])
        }
        ret.push(tmp);
    }
    return ret; 
}

function checkSum(m,array){
    let ret = 0;
    array.forEach( v => {
        if (v.reduce((acc,v)=> acc+v,0) === m) ret += 1;
    })
    return ret;
}
function solution(m,array){

    let ret = 0;

    for(let choose=1; choose<=array.length; choose++){
        let chooseArray = continueCombi(choose, array);
        ret += checkSum(m,chooseArray);
    }
    return ret
}


let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
