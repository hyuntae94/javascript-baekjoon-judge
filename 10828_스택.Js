const [N,...input] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const tmp = input.map(el=> el.split(' '));
class Stack{
    constructor(){
        this.item = [];
    }
    push(param){
        if (this.item.length) this.item[this.size()] = param;
        else this.item[0] = param;
    }
    pop(){
        if (this.item.length) return this.item.pop();
        return -1;
    }
    size(){
        return this.item.length;
    }
    empty(){
        if (this.item.length) return 0;
        return 1;
    }
    top(){
        if (this.item.length) return this.item[this.size()-1];
        return -1;
    }
}

const stack = new Stack();
let answer = [];
for(let i=0; i<tmp.length; i++){
    const order = tmp[i][0];
    if (order === 'push'){
        stack.push(Number(tmp[i][1]));
    }
    else if (order === 'pop'){
        answer.push(stack.pop());
    } else if (order === 'size'){
        answer.push(stack.size());
    } else if (order === 'empty'){
        answer.push(stack.empty());
    } else if (order === 'top'){
        answer.push(stack.top());
    }
}
console.log(answer.join('\n'));
