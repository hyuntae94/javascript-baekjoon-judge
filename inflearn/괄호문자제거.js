function solution(param){
    let stack = [];
    let left = 0;

    for(let x of param){
        if (x === '(') left ++;
        
        if (x !== ')') stack.push(x);
        else if (x ===')' && left > 0){
            while(stack.pop() !== '('){}
            left--;
        }
    }
    return stack.join('').replace(/\(/g,'');
}

// 참고한 코드
// function solution(str) {
//     let res = '';
//     let stack = [];
 
//     for (let x of str) {
//         if (x === '(') stack.push(x);
//         else if (x === ')') stack.pop();
//         else if (stack.length === 0) res += x;
//     }
 
//     return res;
// }
// let str="(A(BC)D)EF(G(H)(IJ)K)LM(N)";
// let str="KKK)LM(N)";
let str="KKK)((((LM)(N)AB";
console.log(solution(str));