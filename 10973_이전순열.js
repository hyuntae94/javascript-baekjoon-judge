//3 3 3 3
//2 2 4 4
//1 4 1 2
//4 1 2 1
let input = '4\n3 4 1 2'.toString().trim().split('\n')
let N = +input[0]
let array = input[1].split(" ").map(Number);
let tmp = [array.pop()];

let flag = -1;

while (array.length){
    flag = array.pop();
    if (tmp[tmp.length - 1] > flag) tmp.push(flag);
    else break;
}

if (tmp.length == N) {
    console.log(-1);
    return ;
}

for (let idx = 0; idx < tmp.length; idx++){
    if (tmp[idx] < flag){
        array.push(tmp[idx]);
        tmp[idx] = flag;
        break;
    }
}
console.log(...array.concat(tmp));
//200ms

