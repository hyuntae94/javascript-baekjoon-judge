const [[T],...inputs] = `3
4 10 20 30 40
3 7 5 12
3 125 15 25
3 1 2 3
2 3 3
2 156 168
4 1 2 3 4`.toString().split('\n').map(el => el.split(' ').map(Number));
// const [[T],...inputs] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));
//조합
const main = (input) => {
    const combiArray = [];

    const combi = (start,idx,array) => {
        if (idx === 2) {
            combiArray.push(array.slice());
            return ;
        }
        for(let i = start; i < input.length; i++){
            array[idx] = input[i];
            combi(i+1,idx+1,array);
        }
    }
    combi(0,0,[]);
    
    //gcd
    const gcd = (a,b) => {
        if (a%b === 0) return b;
        return gcd(b, a%b);
    }

    let sum = 0;
    combiArray.forEach((items)=>{
        const max = Math.max(...items);
        const min = Math.min(...items);

        sum += gcd(max,min);
    })
    return sum;
}

inputs.forEach((input)=>{
    input.shift();
    console.log(main(input));
})