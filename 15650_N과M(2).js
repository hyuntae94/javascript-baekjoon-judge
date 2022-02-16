// const [N, M] = require("fs").readFileSync("./dev/stdin").toString().trim()
//                  .split(" ").map(Number)

// function combi(arr, select){
//     let answer = [];
//     if (select === 1) return arr.map(x=>[x]);
    
//     arr.forEach((v,i)=>{
//         let rest = arr.slice(i+1);
//         let combinations = combi(rest, select-1);
//         let attached = combinations.map(el => [v,...el])
//         answer.push(...attached);
//     })
//     return answer;
// }

// let array = [];
// for (let i = 1; i <= N; i++){
//     array.push(i);
// }

// let answer = combi(array, M)

// for (let item of answer){
//     console.log(...item)
// }

// let answer=[];

// function go(index, start, n, m){
//     if (index == m){
//         // console.log(answer.join(' '));
//         return ;
//     }

//     for (let x=start; x<=n; x++){
//         answer[index] = x;
//         console.log(answer);
//         go(index+1,x+1,n,m);
//     }
// }

// go(0,1,4,2);

let [M,N] = [4,2]

function go2(start, arr, n){
    if (n == 0){
        console.log(arr.join(' '));
        return ;
    }
    for (let x=start; x<=M; x++){
        arr.push(x);
        go2(x+1, arr, n-1);
        arr.pop();
    }
}
go2(1,[],N);