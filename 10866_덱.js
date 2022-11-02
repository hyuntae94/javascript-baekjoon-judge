// push_front X: 정수 X를 덱의 앞에 넣는다.
// push_back X: 정수 X를 덱의 뒤에 넣는다.
// pop_front: 덱의 가장 앞에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// pop_back: 덱의 가장 뒤에 있는 수를 빼고, 그 수를 출력한다. 만약, 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// size: 덱에 들어있는 정수의 개수를 출력한다.
// empty: 덱이 비어있으면 1을, 아니면 0을 출력한다.
// front: 덱의 가장 앞에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
// back: 덱의 가장 뒤에 있는 정수를 출력한다. 만약 덱에 들어있는 정수가 없는 경우에는 -1을 출력한다.
class Deque{
    constructor(){
        this.array = [];
    }
    push_front(param){
        this.array.unshift(param);
    }
    push_back(param){
        this.array.push(param);
    }
    size(){
        return this.array.length;
    }
    pop_front(){
        if (this.size()) return this.array.shift();
        return -1;
    }
    pop_back(){
        if (this.size()) return this.array.pop();
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
        if (this.size()) return this.array[this.size()-1];
        return -1;
    }
}

const [N,...input] = `22
front
back
pop_front
pop_back
push_front 1
front
pop_back
push_back 2
back
pop_front
push_front 10
push_front 333
front
back
pop_back
pop_back
push_back 20
push_back 1234
front
back
pop_back
pop_back`.toString().split('\n');
const answer = [];

const deque = new Deque();
input.forEach(el => {
    const [order, insert] = el.split(' ');
    if (order === 'push_front') deque.push_front(insert);
    else if (order === 'push_back') deque.push_back(insert);
    else if (order === 'pop_front') answer.push(deque.pop_front());
    else if (order === 'pop_back') answer.push(deque.pop_back());
    else if (order === 'size') answer.push(deque.size());
    else if (order === 'empty') answer.push(deque.empty());
    else if (order === 'front') answer.push(deque.front());
    else if (order === 'back') answer.push(deque.back());
})
console.log(answer.join('\n'))