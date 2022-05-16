// let [[row,col],[x,y,d],...map] = '3 3\n1 1 0\n1 1 1\n1 0 1\n1 1 1'
let [[row,col],[x,y,d],...map] = require('fs').readFileSync('./dev/stdin')
.toString().split('\n').map(v => v.split(' ').map(Number));

//1. 현재위치를 청소한다.
//2-a. 현재 위치의 왼쪽이 아직 청소하지 않았고, 빈공간이 존재한다면
//왼쪽으로 회전하여 한 칸 전진하고 1번으로 돌아간다.
//그렇지 않을 경우, 왼쪽방향으로 회전한다.
//2-b. 1번으로 돌아가거나 후진하지 않고 2a번 단계가 연속으로
//4번 실행되었을 경우, 바로 뒤쪽이 벽이라면 작동을 멈춘다.
//그렇지 않다면 한 칸 후진한다.

//청소배열 만들기
const clean = Array.from({length:row}, ()=> new Array(col).fill(0));

//바라보는 방향      d : 0(북), 1(동), 2(남), 3(서)
//왼쪽(바라보는 방향기준): 북쪽이면 [0,-1], 서쪽이면 [1,0], 남쪽이면 [0,1], 동쪽이면 [-1,0]
//후진(바라보는 방향기준): 북쪽이면 [1,0], 서쪽이면 [0,1], 남쪽이면 [-1,0], 동쪽이면 [0,-1]

//2a번 실행횟수 변수
let count = 0;

//청소횟수(청소기 있는 칸 청소했기에 기본값 1시작)
let answer = 1;
//현재 청소기가 존재하는 칸 청소하기
clean[x][y] = 1;

while(1)
{
    let flag = 0;
    //d가 0인 경우
    if (d === 0){
        if (!map[x][y-1] && !clean[x][y-1]){
            d = 3;
            y -= 1;
            clean[x][y] = 1;
            answer += 1;
            flag = 1;
        }
        else d = 3;
    }
    //d가 1인 경우
    else if (d === 1){
        if (!map[x-1][y] && !clean[x-1][y]){
            d = 0;
            x -= 1;
            clean[x][y] = 1;
            answer += 1;
            flag = 1;
        }
        else d = 0;
    }
    //d가 2인 경우
    else if (d === 2){
        if (!map[x][y+1] && !clean[x][y+1]){
            d = 1;
            y += 1;
            clean[x][y] = 1;
            answer += 1;
            flag = 1;
        }
        else d = 1;
    }
    //d가 3인 경우
    else if (d === 3){
        if (!map[x+1][y] && !clean[x+1][y]){
            d = 2;
            x += 1;
            clean[x][y] = 1;
            answer += 1;
            flag = 1;
        } else d = 2;
    }
    count += 1;
    if (flag) count = 0;//1번으로 돌아간 경우 2-a횟수 리셋
    
    if (count === 4){
        if (d === 0 && map[x+1][y]) break;
        else if (d === 1 && map[x][y-1]) break;
        else if (d === 2 && map[x-1][y]) break;
        else if (d === 3 && map[x][y+1]) break;
        else { //후진한 경우
            if (d === 0) x += 1;
            else if (d === 1) y -= 1;
            else if (d === 2) x -= 1;
            else if (d === 3) y += 1;
            count = 0;
        }
    }
}
console.log(answer);