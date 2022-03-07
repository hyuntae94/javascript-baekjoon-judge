

function solution(N,K,array){
    //N개의 카드중에서 3장을 뽑고 모든 경우의 수 구하기
    
    let combiArray = [];
    let tmp = [];
    function combi(start, index){
        if(index === 3){
            combiArray.push(tmp.slice());
            return ;
        }

        for(let i=start; i<array.length; i++){
            tmp[index] = array[i];
            combi(i+1, index+1);
        }
    }
    combi(0,0);

    let answer = new Set();
    for(let item of combiArray){
        let sum = item.reduce((acc,v) => acc + v , 0);
        answer.add(sum);
    }
    
    return ([...answer].sort((a,b)=>b-a)[K-1]);
    
    

}

let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));