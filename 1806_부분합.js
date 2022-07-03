const [[N,S],sequence] = '10 1000\n5 1 3 5 10 7 4 9 2 8'.toString()
// const [[N,S],sequence] = '10 15\n5 1 3 5 10 7 4 9 2 8'.toString()
// const [[N,S],sequence] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map(el => el.split(' ').map(Number));


//앞으로 나가는 front
//뒤따라오는 back
//front가 배열길이 넘어가면 종료
//S이상이면 front-back + 1 부분합 길이 저장
// back 전진 시키면서 부분합 검색
// 만약 S이상이면 계속해서 부분합 길이 저장하고
// 아니면 front만 전진
let front = 0;
let back = 0;
let minLen = Number.MAX_SAFE_INTEGER;
let sum = 0;
let flag = 0;

while(front < N)
{
    if (!flag) sum += sequence[front];
    
    if (sum >= S){
        minLen = Math.min(minLen, front-back+1);

        sum -= sequence[back];
        back += 1;
        flag = 1;
    } else {
        front += 1;
        flag = 0;
    }
}
if (minLen === Number.MAX_SAFE_INTEGER) console.log(0);
else console.log(minLen);



