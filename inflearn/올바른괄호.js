function solution(param){
    let stack = [];

    for(let x of param){
        if (x === '(') stack.push(x);
        else if (x === ')'){
            if (stack.length === 0) return 'NO';
            stack.pop();
        }
    }
    return stack.length === 0 ? "YES" : "NO"
}

// let a="(()(()))(()";
// let a="(())()(";
let a="()))((";
console.log(solution(a));