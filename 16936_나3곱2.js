//순열이고
//다음단계로 갈 때마다 나3, 곱2 둘 중 하나라도 성립하면 패스
//아니면 종료
//마지막까지 왔다면 그 값 리턴
const  [[N], input ] = `4
42 28 84 126`.toString().split('\n').map(el => el.split(' ').map(Number));
// const  [[N], input ] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
const visited = new Array(N).fill(0);
const answer = [];
function permutaion(idx,arr){
    if (idx === N){
        answer.push(arr.slice());
        return ;
    }

    for(let i=0; i<N; i++){
        if (!visited[i]){
            arr[idx] = input[i];
            if (idx >= 1 && !(arr[idx-1] / 3 === arr[idx] || arr[idx-1] * 2 === arr[idx])){
                continue;
            }
            visited[i] = 1;
            permutaion(idx+1, arr);
            visited[i] = 0;
        }
    }

}

permutaion(0,[]);
console.log(answer)