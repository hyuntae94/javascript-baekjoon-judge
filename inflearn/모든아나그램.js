function solution(S,T){
    let continueString = [];

    let end = 0;
    let start = 2;

    for(; start < S.length; start++, end++){
        let tmp = '';
        for(let i=end; i<=start; i++){
            tmp += S[i]
        }
        continueString.push(tmp);
    }

    //하나씩 비교
    let ret = 0;
    let _s2 = T.split('').sort().join('');
    continueString.forEach(v => {
        let _s1 = v.split('').sort().join('');
        
        if(_s1 === _s2) ret += 1;
    })
    return ret;
}


let a="bacaAacba";
let b="abc";
console.log(solution(a, b));

