function solution(s){  
    let dic = {};

    for(let alpha of s){
        if (!dic[alpha]) {
            dic[alpha] = 1;
            continue;
        }
        dic[alpha] += 1;
    }

    let max = Math.max(...Object.values(dic));
    
    return Object.keys(dic).find(key => dic[key] === max)
}

let str="BACBACCACCBDEDE";
console.log(solution(str));

