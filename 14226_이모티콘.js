// const S = +require('fs').readFileSync('./dev/stdin')
const S = +'18'.toString();
const visit = Array.from( {length:S+1}, ()=> new Array(S+1).fill(-1));

const queue = [[1,0]];
visit[1][0] = 0;

let index = 0;
while (index < queue.length)
{
    const [screen, clip] = queue[index++];

    //1. 화면에 있는 모든 이모티콘을 복사하여 클립보드로 옮긴다.
    //(화면,클립) -> (화면,화면)
    if (visit[screen][screen] === -1){
        visit[screen][screen] = visit[screen][clip] + 1;
        queue.push([screen,screen]);
    }
    //2. 클립보드에 있는 모든 이모티콘을 화면에 복사한다.
    //(화면,클립) -> (화면+클립,클립)
    //배열범위벗어나면 안되니깐 screen+clip <= S
    if (screen+clip <= S && visit[screen+clip][clip] === -1){
        visit[screen+clip][clip] = visit[screen][clip] + 1;
        queue.push([screen+clip, clip]);
    }
    //3. 화면에 있는 이모티콘 중 하나를 삭제
    //(화면,클립) -> (화면-1, 클립)
    //배열범위 벗어나면 안되니깐 screen-1>=0
    if (screen - 1 >= 0 && visit[screen-1][clip] === -1){
        visit[screen-1][clip] = visit[screen][clip] + 1;
        queue.push([screen-1,clip]);
    }
}
let answer = Number.MAX_SAFE_INTEGER;
for (let i=0; i<=S; i++){
    if (visit[S][i] !== -1 && visit[S][i] < answer){
        answer = visit[S][i];
    }
}
console.log(answer);