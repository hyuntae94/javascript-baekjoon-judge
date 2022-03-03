let [condition,alphabet] = '4 6\na e i o b z'.split('\n').map((v)=> v.split(' '));
let [L,C] = condition.map(Number);
alphabet.sort();

let password = [];
let answer = "";
let vowel = ['a','e','i','o','u'];

function recursive(array){
    //종료문
    if (password.length === L){
        let countVowel = 0;
        for (let x of password){
            if (vowel.includes(x)) countVowel += 1;
        }
        if (L-countVowel >=2 && countVowel >= 1){
            console.log(password.join(''));
        }
        return;
    }
    
    for (let idx = 0; idx < array.length; idx++){
        password.push(array[idx]);
        let nextArray = array.slice(idx+1);
        recursive(nextArray);
        password.pop();
    }

}
recursive(alphabet);
