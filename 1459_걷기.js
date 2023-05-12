const [x,y,w,s] = `135 122 43 29`.toString().trim().split(' ').map(Number);

//경우의 수 생각하기
//1. 수평으로만 이동하기
let min = w * (x + y);
//2. 대각선으로만 이동

//2-1.짝수일 경우

if ( (x + y) % 2 === 0){
    min = Math.min( Math.max(x,y) * s , min);
} 
// 2-2. 홀수일 경우
else {
    min = Math.min( ( Math.max(x,y) - 1) * s + w, min);
}

//3. 수평+대각선

let a = ( Math.min(x,y) * s) + (Math.abs(x-y)*w);
min = Math.min(a, min);

console.log(min);
