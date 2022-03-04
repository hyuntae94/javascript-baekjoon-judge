let input = '8\n0 5 4 5 4 5 4 5\n4 0 5 1 2 3 4 5\n9 8 0 1 2 3 1 2\n9 9 9 0 9 9 9 9\n1 1 1 1 0 1 1 1\n8 7 6 5 4 0 3 2\n9 1 9 1 9 1 0 9\n6 5 4 3 2 1 9 0'.toString().trim().split('\n').map(v => v.split(' ').map(Number));
let N = input.shift();

//조합
let combiArr = [];

function combi1(curNum,array){
    if (array.length == N/2){
        combiArr.push(array.slice());
        return ;
    }
    for (let i=curNum; i<N; i++){
        array.push(i);
        combi1(i+1,array);
        array.pop();
    }
}
combi1(0,[]);

let abilty = [];

combiArr.forEach(v => {
    console.log(v);
    let arr = v; 

    let answer = [];
    let ret = [];

    function combi(index,start){
        if(index == 2){
            answer.push(ret.slice());
            return ;
        }

        for(let i=start; i<v.length; i++){
            ret[index] = arr[i];
            combi(index+1,i+1);
        }
    }
    combi(0,0)
    
    let totalAbilty = 0;

    answer.forEach((v) => {
        totalAbilty += input[v[0]][v[1]] + input[v[1]][v[0]];
    })
    abilty.push(totalAbilty);
})
//능력치 중 차이가 가장 작은 값 계산
let min = 999999999;
abilty.sort((a,b) => a-b);
for (let i=0; i<abilty.length / 2 - 1; i++){
    if (abilty[i] == abilty[abilty.length-1-i]) console.log(i);
    let different = Math.abs(abilty[i]-abilty[abilty.length-1-i]);
    if (different < min) min = different; 
}

console.log(min);