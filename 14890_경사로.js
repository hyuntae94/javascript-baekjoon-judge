let [[N,L],...matrix] = "6 1\n3 2 1 1 2 3\n3 2 2 1 2 3\n3 2 2 2 3 3\n\
3 3 3 3 3 3\n3 3 3 3 2 2\n3 3 3 3 2 2".toString().split('\n').map(val => val.split(' ').map(Number));
// let [[N,L],...matrix] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(val => val.split(' ').map(Number));

let answer = 0; // 최종리턴값

//행
for(let i=0; i<N; i++){
    let curVal = matrix[i][0];
    let count = 1;
    let flag = 0;
    for(let j=1; j<N; j++){
        //다음칸의 숫자가 1만큼 높은 숫자일 경우
        if (curVal - matrix[i][j] === -1){
            if (count >= L){
                curVal = matrix[i][j];
                count = 1;
            }
            else {
                flag = 1;
                break ;
            }
        }
        //똑같은 숫자일 경우
        else if (curVal === matrix[i][j]){
            count += 1;
        }
        //1만큼 낮은 숫자일 경우
        else if (curVal - matrix[i][j] === 1){
            let flag2 = 0;
            for (let k=j; k<= j+L-1; k++){ //그 숫자가 과연 L길이 만큼 있는가??
                if (matrix[i][j] !== matrix[i][k]){ //L길이 만큼 없다면 종료
                    flag2 = 1;
                    break;
                }
            }
            if(flag2) { //복잡하지만 for문 2개를 벗어나기 위해서 flag를 2번사용해줌
                flag = 1;
                break;
            }
            else {//L길이만큼 존재한다면 계속 진행
                curVal = matrix[i][j+L-1];
                count = 0;
                j = j+L-1;
            }
        }
        //그 이외의 숫자일 경우
        else {
            flag = 1;
            break;
        }
    }
    if (!flag) answer += 1;
}

//열
for(let i=0; i<N; i++){
    let curVal = matrix[0][i];
    let count = 1;
    let flag = 0;
    for(let j=1; j<N; j++){
        //다음칸의 숫자가 1만큼 높은 숫자일 경우
        if (curVal - matrix[j][i] === -1){
            if (count >= L){
                curVal = matrix[j][i];
                count = 1;
            }
            else {
                flag = 1;
                break ;
            }
        }
        //똑같은 숫자일 경우
        else if (curVal === matrix[j][i]){
            count += 1;
        }
        //1만큼 낮은 숫자일 경우
        else if (curVal - matrix[j][i] === 1){
            let flag2 = 0;
            for (let k=j; k<= j+L-1; k++){
                if (matrix[j][i] !== matrix[k][i]){
                    flag2 = 1;
                    break;
                }
            }
            if(flag2) {
                flag = 1;
                break;
            }
            else {
                curVal = matrix[j+L-1][i];
                count = 0;
                j = j+L-1;
            }
        }
        //그 이외의 숫자일 경우
        else{
            flag = 1;
            break;
        }
    }
    if (!flag) answer += 1;
}

console.log(answer);