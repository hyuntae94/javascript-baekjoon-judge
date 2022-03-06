function solution(M, array){
    let max = -1;

    array.sort((a,b) => (a[0]+a[1]) - (b[0]+b[1]));
    
    for(let i=0; i<array.length; i++){
        let people = 0;//사줄수 있는 학생수
        let sum = array[i][0] / 2 + array[i][1];//50%할인된 가격 먼저 총 금액에 더해주기

        let deepCopyArray = JSON.parse(JSON.stringify(array));
        let newArray = deepCopyArray.slice(0,i).concat(deepCopyArray.slice(i+1));

        for (let j=0; j<newArray.length; j++){
            if(sum > M) break;
            people += 1;
            
            sum += newArray[j][0] + newArray[j][1];
        }
        if (people > max) max = people;
    }

    return max;
}



let arr=[[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]];
console.log(solution(28, arr));
