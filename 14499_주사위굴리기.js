let [[row,col,x,y,K],...matrix] = '3 3 0 0 16\n0 1 2\n3 4 5\n6 7 8\n4 4 1 1 3 3 2 2 4 4 1 1 3 3 2 2'.toString().split('\n').map(v => v.split(' ').map(Number));

let orders = matrix.pop();

let dice = [[0,0,0],
            [0,0,0],
            [0,0,0],
            [0,0,0]];

let answer = [];

for (let order of orders){
    let tmp = Array.from( { length : 4 }, () => new Array(3).fill(0));
    //주사위를 움직였을 때 지도위에 있는점
    //동쪽으로 움직여라
    if (order === 1){
        if(x >= 0 && x <= row-1 && y+1 >= 0 && y+1 <= col-1){
            y += 1;//동쪽으로 한칸이동
        
            tmp[0][1] = dice[0][1];
            tmp[2][1] = dice[2][1];
            tmp[1][2] = dice[1][1];
            tmp[1][1] = dice[1][0];
            tmp[1][0] = dice[3][1];
            tmp[3][1] = dice[1][2];
        }
    }
       
    //서쪽으로
    else if (order === 2){
        if(x >= 0 && x <= row-1 && y-1 >= 0 && y-1 <= col-1){
            y -= 1;//서쪽으로 한칸이동

            tmp[0][1] = dice[0][1];
            tmp[2][1] = dice[2][1];
            tmp[1][1] = dice[1][2];
            tmp[1][0] = dice[1][1];
            tmp[3][1] = dice[1][0];
            tmp[1][2] = dice[3][1];
        }
    }
    //북쪽으로
    else if (order === 3){
        if (x-1 >= 0 && x-1 <= row-1 && y >= 0 && y <= col-1){
            x -= 1;//북쪽으로 한칸이동
        
            tmp[0][1] = dice[1][1];
            tmp[1][1] = dice[2][1];
            tmp[2][1] = dice[3][1];
            tmp[3][1] = dice[0][1];
            tmp[1][0] = dice[1][0];
            tmp[1][2] = dice[1][2];
        }
    }
    //남쪽으로
    else if (order === 4){
        if (x+1 >= 0 && x+1 <= row-1 && y >= 0 && y <= col-1){
            x += 1;//남쪽으로 한칸이동

            tmp[0][1] = dice[3][1];
            tmp[1][1] = dice[0][1];
            tmp[2][1] = dice[1][1];
            tmp[3][1] = dice[2][1];
            tmp[1][0] = dice[1][0];
            tmp[1][2] = dice[1][2];    
        }
    }
    else continue; // 바깥으로 이동할려고 하면 무시

    if (matrix[x][y]){
        tmp[3][1] = matrix[x][y];
        matrix[x][y] = 0;
    }
    else matrix[x][y] = tmp[3][1];

    dice = tmp;
    console.log(dice[1][1]);
}
