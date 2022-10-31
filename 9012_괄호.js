const [N,...input] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n');
const answer = [];

for(let items of input){
    const item = items.split('');
    let count = 0;
    for(let i=0; i<item.length; i++){
        if (count < 0) break;
        
        if (item[i] === '(') count += 1;
        else if (item[i] === ')') count -= 1;
    }
    count === 0 ? console.log("YES") : console.log("NO");
}