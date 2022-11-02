let [N,postFix, ...input] = `5
ABC*+DE/-
1
2
3
4
5`.toString().split('\n');

N = +N;
postFix = postFix.split('');
input = input.map(Number);

const map = new Map();
let idx = 0;
for(let i=0; i<postFix.length; i++){
    if (postFix[i] >='A' && postFix[i] <='Z'){
        if (!map.has(postFix[i])){
            map.set(postFix[i],input[idx++])
        }
    }
}

const stack = [];
idx=0;
while(idx < postFix.length){
    const item = postFix[idx++];
    //알파벳일 경우
    if (item >= 'A' && item <= 'Z'){
        stack.push(map.get(item));
        continue;
    }
    //연산자일경우
    const cal1 = stack.pop();
    const cal2 = stack.pop();
    
    if (item === '*'){
        stack.push(Number((cal2*cal1).toFixed(2)));
    } else if (item === '/'){
        stack.push(Number((cal2/cal1).toFixed(2)));
    } else if (item === '+'){
        stack.push(Number((cal2+cal1).toFixed(2)));
    } else if (item === '-'){
        stack.push(Number((cal2-cal1).toFixed(2)));

    }
}

console.log(stack[0].toFixed(2));