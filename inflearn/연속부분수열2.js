function solution(m, array){
    let [_sum,answer,end] = [0,0,0];
    
    for(let start = 0; start <array.length; start++){
        _sum += array[start];

        while(_sum > m){
            _sum -= array[end++];
        }
        answer += start-end+1
    }
    return answer;
}


let a=[1, 3, 1, 2, 3];
console.log(solution(5, a));