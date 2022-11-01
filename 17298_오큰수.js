// const [[N],input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));

// let [nge, ngeIdx] = [0,0];
// const answer = [];
// for(let i=0; i<input.length; i++){
//     if(i < ngeIdx){
//         let flag1 = 0;
//         for(let k=i+1; k<=ngeIdx; k++){
//             if(input[k]>input[i]){
//                 nge = input[k];
//                 ngeIdx = k;
//                 answer.push(nge);
//                 flag1 = 1;
//                 break ;
//             }
//         }
//         if (flag1) continue;
//         let flag2 = 1;
//         for(let k=ngeIdx+1; k<input.length; k++){
//             if (input[k] > input[i]){
//                 nge = input[k];
//                 ngeIdx = k;
//                 answer.push(nge);
//                 flag2 = 0;
//                 break;
//             }
//         }
//         if (flag2){
//             nge = 0;
//             ngeIdx = i+1;
//             answer.push(-1);
//         }
//     } else if (i === ngeIdx){
//         let flag = 1;
//         for(let j=ngeIdx+1; j<input.length; j++){
//             if (input[j] > input[i]){
//                 nge = input[j];
//                 answer.push(nge);
//                 ngeIdx = j;
//                 flag = 0;
//                 break; 
//             }
//         }
//         if (flag) {
//             ngeIdx += 1;
//             nge = 0;
//             answer.push(-1);
//         }
//     }
// }
// console.log(...answer);
const [[N],input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));

const result = new Array(N).fill(-1);
const stack = [];

for(let idx=0; idx<input.length; idx++){
    while(stack.length && input[stack[stack.length-1]] < input[idx]){
        result[stack.pop()] = input[idx];
    }
    stack.push(idx);
}
console.log(...result);
