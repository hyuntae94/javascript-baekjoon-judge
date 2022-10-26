const [A,B,C,X,Y] = '1500 2000 500 90000 100000'.toString().split(' ').map(Number);
// const [A,B,C,X,Y] = require('fs').readFileSync('./dev/stdin').toString().split(' ').map(Number);
// console.log(A,B,C,X,Y);

//만약 후라이드와 양념 합친 가격이 2*C보다 크다면 x,y중 작은 값을 찾고
//작은 값 * ( 2*c) 해주고 (x,y)중 큰값에서 작은값을 빼고 해당 치킨의 가격을 곱해서 더해준다.

let answer = 0;

if (A+B > 2*C){
    const [[maxVal, max],[minVal, min]] = X > Y ? [[A,X],[B,Y]] : [[B,Y],[A,X]];
    // console.log([[maxVal, max],[minVal, min]]) 
    answer += min * (2*C);
    if (maxVal > 2*C){
        answer += (max-min) * (2*C);
    } else {
        answer += (max-min) * maxVal;
    }
}
else {
    answer += A*X;
    answer += B*Y;
}
console.log(answer);