const [[N,K],...input] = '2 3\nantaxxxxxxxtica\nantarctica'.toString()
// const [[N,K],...input] = '3 6\nantarctica\nantahellotica\nantacartica'.toString()
// const [[N,K],...input] = '9 8\nantabtica\nantaxtica\nantadtica\nantaetica\nantaftica\nantagtica\nantahtica\nantajtica\nantaktica'.toString()
// const [[N,K],...input] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map((v,i)=> i === 0 ? v.split(' ').map(Number) : v);


const initialAlph = ['a','n','t','i','c'];
const restAlph = ['b','d','e','f','g','h','j','k','l','m','o','p','q','r','s','u','v','w','x','y','z'];


function maxWord(array)
{
    let regibleWord = 0;

    for (let word of input){

        let flag = 1;

        for (let alpha of word){
            if (!array.includes(alpha)) {
                flag=0;
                break;
            }
        }

        if (flag) regibleWord += 1;
    }

    return regibleWord;
}

const maxArray = [];

function combination(array,index,start,findIndex){
    if(index === findIndex)
    {
        const allAlph = [...initialAlph, ...array];
        maxArray.push(maxWord(allAlph));
        return ;
    }
    for (let i=start; i<restAlph.length; i++)
    {
        array[index] = restAlph[i];
        combination(array, index+1, i+1, findIndex);
    }
}


if (0 <= K < 5) console.log(0);


else if (K === 5) {
    console.log(maxWord(initialAlph));
}

else if( K > 5 && K <= 26) {
    combination([],0,0,K-5);
    console.log(Math.max(...maxArray));
}