const [str, ...input] = `abc
9
L
L
L
L
L
P x
L
B
P y`.toString().split('\n');
input.shift();

const lStack = str.split('');
const rStack = [];

input.forEach((el) => {
    const [order, insert] = el.split(' ');
    if (order === 'L' &&  lStack.length) rStack.push(lStack.pop());
    else if (order === 'D' && rStack.length) lStack.push(rStack.pop());
    else if (order === 'B') lStack.pop();
    else if (order === 'P') lStack.push(insert);
})
console.log([...lStack, ...rStack.reverse()].join(''));



