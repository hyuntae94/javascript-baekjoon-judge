const input = '<problem>17413<is hardest>problem ever<end>'.toString();
const answer = [];
let str = '';
let flag = 0;
for(let i=0; i<input.length; i++){
      if (flag){
        str += input[i];
        if (input[i] === '>'){
            answer.push(str);
            flag = 0;
            str =  '';
        }
      } else {
        if (input[i] === ' '){
            answer.push(str.split('').reverse().join('')+' ');
            str ='';
        } else if (input[i] === '<'){
            if (str.length) answer.push(str.split('').reverse().join(''));
            flag = 1;
            str = '<';
        } else {
            str += input[i];
        }
      }
}
if (str.length) answer.push(str.split('').reverse().join(''));
console.log(answer.join(''));