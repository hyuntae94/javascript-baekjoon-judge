function solution(K,array){
    let end = 0;
    let start = end + K - 1;
    let max = Number.MIN_VALUE;
    for(; start < array.length; start++, end++){
        let sum = 0;
        for(let i=end; i<=start; i++){            
            sum += array[i];
        }
        max = Math.max(max, sum);
    }
    return max;
}


let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));