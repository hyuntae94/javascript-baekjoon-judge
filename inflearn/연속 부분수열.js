function solution(sum, array){
    let [_sum,answer,left] = [0,0,0];
    
    for(let start = 0; start <array.length; start++){
        _sum += array[start];
        if(_sum === sum) answer += 1;
        while(_sum >= sum){
            _sum -= array[left++];
            if(_sum === sum) answer += 1;
        }
    }
    return answer;
}

let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));
