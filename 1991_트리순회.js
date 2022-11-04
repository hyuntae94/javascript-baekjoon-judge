const input = `7
A B C
B D .
C E F
E . .
F . G
D . .
G . .`.toString().trim().split('\n');

const obj = {};
let str = ''
const answer = [];

input.forEach((el)=> {
    const [node,left,right] = el;
    obj[node] = [];
    obj[node].push(left,right);
})

const circle1 = (node) => {
    
    if (node === '.')   return ;

    str += node;
    circle1(obj[node][0]);
    circle1(obj[node][1]);
}
const circle2 = (node) => {
    
    if (node === '.')   return ;

    circle2(obj[node][0]);
    str += node;
    circle2(obj[node][1]);
}
const circle3 = (node) => {
    
    if (node === '.')   return ;

    circle3(obj[node][0]);
    circle3(obj[node][1]);
    str += node;
}
circle1('A');
answer.push(str);
str = '';
circle2('A');
answer.push(str);
str = '';
circle3('A');
answer.push(str);
console.log(answer.join('\n'));