function solution(board, moves){
    let basket = [];
    let answer = 0;

    function returnDollNumber(param){
       let column = param - 1;

       for(let i=0; i<board.length; i++){
              if(board[i][column]){
                     let tmp = board[i][column]
                     board[i].splice(column,1,0);
                     return tmp;
              }
       }
       return 0;
    }

    function checkBaseketTop(number){
       if(basket.length > 0 && basket[basket.length - 1] === number){
              answer += 2;
              basket.pop();
              return ;
       }
       basket.push(number);
    }

    moves.forEach(v => {
       let dollNumber = returnDollNumber(v);
       if (dollNumber){
              checkBaseketTop(dollNumber)
       } 
    })

    return answer;
}

let a=[[0,0,0,0,0],
       [0,0,1,0,3],
       [0,2,5,0,1],
       [4,2,4,4,2],
       [3,5,1,3,1]];

let b=[1, 5, 3, 5, 1, 2, 1, 4];
console.log(solution(a, b));