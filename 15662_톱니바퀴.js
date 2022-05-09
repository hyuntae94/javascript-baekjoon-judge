// let [T, ...input] = '4\n10101111\n01111101\n11001110\n00000010\n2\n3 -1\n1 1'.toString().split('\n');
// let [T, ...input] = '4\n10001011\n10000011\n01011011\n00111101\n5\n1 1\n2 1\n3 1\n4 1\n1 -1'.toString().split('\n');
// let [T, ...input] = '4\n10010011\n01010011\n11100011\n01010101\n8\n1 1\n2 1\n3 1\n4 1\n1 -1\n2 -1\n3 -1\n4 -1'.toString().split('\n');
let [T, ...input] = '5\n10010011\n01010011\n11100011\n01010101\n01010011\n10\n1 1\n2 1\n3 1\n4 1\n1 -1\n2 -1\n3 -1\n4 -1\n5 1\n5 -1'.toString().split('\n');
// // let [T, ...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n');
T = Number(T);
let matrix = [];
for (let i=0; i<T; i++){
    matrix.push(input[i].split('').map(Number));
}
let excute = [];
for (let i=T+1; i<input.length; i++){
    excute.push(input[i].split(' ').map(Number));
}


let _matrix = JSON.parse(JSON.stringify(matrix));

for(let [x,y] of excute){
    let start = x;
    let Rota1 = y;//1은 시계방향으로 회전, //-1은 반시계반향으로 회전
    let Rota2 = y;

    rotation(start-1, Rota1); //기준 톱니바퀴 회전시켜주기

    //start 기준 앞 톱니바퀴 처리
    for (let i=start-1; i>0; i--){
        let preRota = (Rota1 === 1 ? -1 : 1);
        //i의 9시바퀴와 i-1의 3시바퀴가 서로 다른 극인 경우 회전
        if (matrix[i][6] !== matrix[i-1][2]){
            //i-1번째 톱니바퀴 회전시켜주고
            rotation(i-1, preRota);
            //회전방향 수정
            Rota1 = Rota1 === 1 ? -1 : 1; 
        }
        //i의 9시바퀴와 i-1의 3시바퀴가 같은 극인 경우 종료
        else break; 
    }
    //start 기준 뒤 톱니바퀴 처리
    for (let i=start-1; i < T-1; i++){
        let nextRota = (Rota2 === 1 ? -1 : 1);
        //i의 3시바퀴와 i+1의 9시바퀴가 서로 다른 극인 경우 회전
        if (matrix[i][2] !== matrix[i+1][6]){
            //i+1번째 톱니바퀴 회전시켜주고
            rotation(i+1, nextRota);
            //회전방향 수정
            Rota2 = Rota2 === 1 ? -1 : 1; 
        }
        //i의 3시바퀴와 i+1의 9시바퀴가 같은 극인 경우 종료
        else break; 
    }
    matrix = JSON.parse(JSON.stringify(_matrix));
}

//배열 회전시켜주는 함수
function rotation(idx, param){
    //시계방향회전
    if (param == 1){
        let val = _matrix[idx].pop();
        _matrix[idx].unshift(val);
    }
    //반시계방향회전
    else if (param == -1){
        let val = _matrix[idx].shift();
        _matrix[idx].push(val);
    }
}

let answer = 0;

for(let element of matrix){
    if (element[0] === 1) answer += 1;
}

console.log(answer);


