// const [[N,S],postion] = require('fs').readFileSync('./dev/stdin').toString().trim().split('\n').map(el => el.split(' ').map(Number));
const [[N,S],postion] = `3 81
33 105 57`.toString().trim().split('\n').map(el => el.split(' ').map(Number));

if (N === 1) {
    console.log(Math.abs(S-postion[0]));
    return ;
}
const dist = [...new Set(postion.map((el)=>Math.abs(S-el)))];

if (dist.length === 1) {
    console.log(dist[0]);
    return ;
}

const gcd = (a,b) => {
    if (a%b === 0) return b;
    return gcd(b, a%b);
}

let answer = gcd(Math.max(dist[0],dist[1]),Math.min(dist[0],dist[1]));
for(let i=2; i<dist.length; i++){
    answer = gcd(Math.max(answer,dist[i]), Math.min(answer,dist[i]));
}
console.log(answer);