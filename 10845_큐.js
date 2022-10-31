const [N, ...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n');

class Queue{
    constructor(){
        this.array = [];
    }
    size(){
        return this.array.length;
    }
    push(param){
        this.array.push(param);
    }
    pop(){
        if(this.size()) return this.array.shift();
        return -1;
    }
    empty(){
        if (this.size()) return 0;
        return 1;
    }
    front(){
        if (this.size()) return this.array[0];
        return -1;
    }
    back(){
        if (this.size()) return this.array[this.size() - 1];
        return -1;
    }
}

const queue = new Queue();
const answer = [];
input.forEach((el) => {
    const [order, insert] = el.split(' ');
    if (order === 'push') queue.push(insert);
    else if (order === 'pop') answer.push(queue.pop());
    else if (order === 'size') answer.push(queue.size());
    else if (order === 'empty') answer.push(queue.empty());
    else if (order === 'front') answer.push(queue.front());
    else if (order === 'back') answer.push(queue.back());
})
console.log(answer.join('\n'));