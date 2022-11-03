const input = '18 24'.toString().split(' ');
let num1 = Math.max(...input);
let num2 = Math.min(...input);

function gcb(a,b){
    if(a%b === 0) return b;
    return gcb(b,a%b);
}

const retGcb = gcb(num1,num2);
const retLcm = (num1 * num2) / retGcb

console.log(retGcb);
console.log(retLcm);

