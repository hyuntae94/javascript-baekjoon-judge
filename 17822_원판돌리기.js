// const [[N,M,T],...input] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(el=>el.split(' ').map(Number));
const [[N,M,T],...input] = `4 6 3
1 2 3 4 5 6
2 3 4 5 6 7
3 4 5 6 7 8
4 5 6 7 8 9
2 1 4
3 0 1
2 1 2`.toString().trim().split('\n').map(el=>el.split(' ').map(Number));

let spins = input.slice(0,N);

const plays = input.slice(N);

//T번 만큼 실행
//우로 k번 회전  -> (i,j)=> j = (j+k) % M
//좌로 k번 회전  -> (i,j)=> j = M - ((j+k) % M)

//1. 좌 또는 우로 회전 후
//2. 모든 원소 상하좌우 검사
//3-1. 똑같은 원소가 있다면 0으로 바꿔주고 flag 체크 후 계속 검사
//3-2. 똑같은 원소가 없다면 0을 제외한 전체 원소 더해서 평균값보다 크면 -1, 작으면 +1
//4. 1~3번 반복

function rightRota(array,k){
    for(let row of array){
        let tmp = [];
        for(let col=0; col<M; col++){
            tmp[(col+k)%M] = spins[row][col];
        }
        spins[row] = tmp;
    }
}

function leftRota(array,k){
    for(let row of array){
        let tmp = [];
        for(let col=0; col<M; col++){
            tmp[(col+k)%M] = spins[row][col];
        }
        spins[row] = tmp;
    }
}

for(let [x,d,k] of plays){
    let flag = 0;//똑같은 원소가 있다면 1, 없다면 0
    
    const xArray = [];
    for(let i=1;;i++){
        if(x * i <= N) xArray.push(x * i - 1);
        else break ;
    }
    if (d === 0) rightRota(xArray,k); //시계방향
    else if (d === 1) leftRota(xArray,M-k); //반시계방향
    console.log('회전 후 모습 : ',spins)
    let copySpins = JSON.parse(JSON.stringify(spins));

    let sum = 0;
    let count = 0;
    for(let row=0; row<N; row++){
        for(let col=0; col<M; col++){
            if(spins[row][col] === 0) continue;

            //오른쪽
            let right = (col+1) % M;
            if (spins[row][col] === spins[row][right]){
                copySpins[row][col] = 0;
                copySpins[row][right] = 0;
                flag=1;
            }
            //위쪽
            let up = row+1;
            if (up < N){
                if (spins[row][col] === spins[up][col]){
                    copySpins[row][col] = 0;
                    copySpins[up][col] = 0;
                    flag=1;
                }
            }
            
            if (copySpins[row][col] !== 0){
                count += 1;
                sum += copySpins[row][col];
            }
        }
    }
    //인접하면서 같은 수가 없는 경우
    if (!flag){
        let avg = sum/count;
        for(let row=0; row<N; row++){
            for(let col=0; col<M; col++){
                if (copySpins[row][col] !== 0){
                    if (copySpins[row][col] < avg) copySpins[row][col]+=1;
                    else if (copySpins[row][col] > avg) copySpins[row][col]-=1;
                }
            }
        }
    }

    spins = copySpins;
}

let sum = 0;

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        sum += spins[i][j]
    }
}
console.log('최종 원판 : ', spins);
console.log(sum);