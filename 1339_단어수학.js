// const [N,...input]= '2\nGCF\nACDEB'.toString()
// const [N,...input]= '2\nAAA\nAAA'.toString()
const [N,...input]= '10\nA\nB\nC\nD\nE\nF\nG\nH\nI\nJ'.toString()
// const [N,...input]= require('fs').readFileSync('./dev/stdin).toString()
.split('\n').map((v,i)=> i === 0 ? +v : v.split(''));

let numberList = [9,8,7,6,5,4,3,2,1,0];
let alphet = input.reduce((acc,val)=> [...new Set(acc.concat(val))] , []);
let alphetCount = alphet.length;
let max = Number.MIN_SAFE_INTEGER;

numberList = numberList.slice(0,alphetCount);

//최대값 구하는 식

function sumAlphet(array)
{
    let sum = 0;
    for(let word of input)
    {
        let tmp = '';
        for(let alpa of word)
        {
            let idx = alphet.findIndex(el => el === alpa);
            tmp += array[idx];
        }
        sum += Number(tmp);
    }

    if (max < sum) max = sum;
}


//순열
const visited = new Array(numberList.length).fill(0);

function permutation(array, index){

    if (index === numberList.length)
    {
        //각각의 알파벳에 숫자할당하고 계산하는 함수
        sumAlphet(array);
        return ;
    }
    for(let i=0; i<numberList.length; i++)
    {
        if (!visited[i])
        {
            visited[i] = 1;
            array[index] = numberList[i];
            permutation(array, index+1);
            visited[i] = 0;
        }
    }
}

permutation([],0)

console.log(max)

