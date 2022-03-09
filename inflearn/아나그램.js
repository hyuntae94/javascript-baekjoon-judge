function solution(s1, s2){
    let _s1 = s1.split('').sort().join('');
    let _s2 = s2.split('').sort().join('');

    if(_s1 === _s2) return 'Yes'
    else return 'No'
}


// let a="AbaAeCe";
// let b="baeeACA";
// console.log(solution(a, b));

let a='abaCC';
let b='Caaab';
console.log(solution(a,b));