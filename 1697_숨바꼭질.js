// const [N,K] = require('fs').readFileSync('./dev/stdin').toString().split(' ').map(Number);
const [N,K] = '5 17'.toString().split(' ').map(Number);

let memory = new Array(100001).fill(0);
let queue = [N];
let pointer = 0;

while(1){
    if(N>=K){
        console.log(N-K);
        break;
    }
    let tmp = queue[pointer++];

    if (tmp === K){
        console.log(memory[tmp]);
        break ;
    }
    
    if (!memory[tmp-1] && tmp-1>=0) {
        memory[tmp-1] = memory[tmp] + 1;
        queue.push(tmp-1);
    }
    if (!memory[tmp+1] && tmp+1<=100000){
        memory[tmp+1] = memory[tmp] + 1;
        queue.push(tmp+1);
    }
    if (!memory[tmp*2] && tmp*2<=100000) {
        memory[tmp*2] = memory[tmp] + 1;
        queue.push(tmp*2);
    }
}
//JS에서 큐를 사용하여 앞에서 부터 하나씩 값을 가져오는 unshift()함수의 시간복잡도는 O(N)인데
//대신에 pointer를 사용하여 배열의 인덱스를 하나씩 볼 수 있게 바꿔주었다.이것의 시간복잡도는 O(1)로 
//속도가 더 빨라졌다.
