const string = 'Baekjoon Online Judge'.toString().split('');
const alphaCollection = ['a','b','c','d','e','f','g',
'h','i','j','k','l','m',
'n','o','p','q','r','s',
't','u','v','w','x','y','z'];
const test = new Map();
alphaCollection.map((alpha,idx)=>{
    test.set(alpha,idx);
});
let answer = '';
string.map((alpha) => {
    if (alpha >= 'A' && alpha <='Z'){
        const toLower = alpha.toLowerCase();
        const rot13 = (test.get(toLower) + 13) % 26;
        answer += (alphaCollection[rot13]).toUpperCase();
    } else if (alpha >= 'a' && alpha <= 'z'){
        const rot13 = (test.get(alpha) + 13) % 26;
        answer += alphaCollection[rot13];
    } else answer += alpha;
})
console.log(answer);
