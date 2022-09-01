const [[N,M],...input] =`5 3
###
.o.
#.#
.o.
###`.toString().split('\n').map((el,idx) => !idx ? el.split(' ').map(Number) : el.split(''));

const COIN1 = 0;
const COIN2 = 1;

const coins = [];

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if (input[i][j] === 'o') {
            coins.push({row:i, col:j})
        }
    }
}

function check(){

    let coin1 = false;
    let coin2 = false;

    if (!(coins[COIN1].row >= 0 && 
        coins[COIN1].col >= 0 && 
        coins[COIN1].row < N && 
        coins[COIN1].col < M)){
            coin1 = true;
        }

    if (!(coins[COIN2].row >= 0 && 
        coins[COIN2].col >= 0 && 
        coins[COIN2].row < N && 
        coins[COIN2].col < M)){
            coin2 = true;
        }

    if ( (coin1 == true && coin2 == false) || (coin1 == false && coin2 == true)) return true;
    
    return false;
}

const answer = [];

function dfs(direction,count){

    if (count > 10) return ;
    if (check()) {
        answer.push(count);
        return ;
    }
  
    let canMove1 = false;
    let canMove2 = false;

    switch (direction) {
        case 'up':
            const [up1X, up1Y] = [coins[COIN1].row - 1, coins[COIN1].col ]; 
            const [up2X, up2Y] = [coins[COIN2].row - 1, coins[COIN2].col ]; 
            if (input[up1X][up1Y] !== '#') {
                canMove1 = true;
                coins[COIN1].row -= 1;
            }
            if (input[up2X][up2Y] !== '#') {
                canMove2 = true;
                coins[COIN2].row -= 1;
            }
            break;
        case 'down':
            const [down1X, down1Y] = [coins[COIN1].row + 1, coins[COIN1].col ]; 
            const [down2X, down2Y] = [coins[COIN2].row + 1, coins[COIN2].col ]; 
            if (input[down1X][down1Y] !== '#') {
                canMove1 = true;
                coins[COIN1].row += 1;
            }
            if (input[down2X][down2Y] !== '#') {
                canMove2 = true;
                coins[COIN2].row += 1;
            }
            break;
        case 'left':
            const [left1X, left1Y] = [coins[COIN1].row, coins[COIN1].col - 1]; 
            const [left2X, left2Y] = [coins[COIN2].row, coins[COIN2].col - 1]; 
            if (input[left1X][left1Y] !== '#') {
                canMove1 = true;
                coins[COIN1].col -= 1;
            }
            if (input[left2X][left2Y] !== '#') {
                canMove2 = true;
                coins[COIN2].col -= 1;
            }
            break;
        case 'right':
            const [right1X, right1Y] = [coins[COIN1].row, coins[COIN1].col + 1 ]; 
            const [right2X, right2Y] = [coins[COIN2].row, coins[COIN2].col + 1 ]; 
            if (input[right1X][right1Y] !== '#') {
                canMove1 = true;
                coins[COIN1].col += 1;
            }
            if (input[right2X][right2Y] !== '#') {
                canMove2 = true;
                coins[COIN2].col += 1;
            }
            break;
        default:
            break;
    }

        /** 상 */
        dfs('up',count+1);
        if(canMove1) coins[COIN1].row += 1;
        if(canMove2) coins[COIN2].row += 1;
        /** 하 */
        dfs('down',count+1);
        if(canMove1) coins[COIN1].row -= 1;
        if(canMove2) coins[COIN2].row -= 1;
        /** 좌 */
        dfs('left',count+1);
        if(canMove1) coins[COIN1].col += 1;
        if(canMove2) coins[COIN2].col += 1;
        
        /** 우 */
        dfs('right',count+1);
        if(canMove1) coins[COIN1].col -= 1;
        if(canMove2) coins[COIN2].col -= 1;
}

dfs(null,0);

console.log(answer);




