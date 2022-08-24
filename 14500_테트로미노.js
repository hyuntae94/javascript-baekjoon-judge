const [[R,C],...input] = `4 10
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1
1 2 1 2 1 2 1 2 1 2
2 1 2 1 2 1 2 1 2 1`.toString().split('\n').map(el => el.split(' ').map(Number));
// const [[R,C],...input] = require('fs').readFileSync('./dev/stdin').toString().split('\n').map(el => el.split(' ').map(Number));

const visited = Array.from({length:R}, ()=> new Array(C).fill(0));

let max = Number.MIN_SAFE_INTEGER;

function dfs(r,c,count,sum){
    if (count === 4){
        max = Math.max(max,sum);
        return ;
    }

    // 상
    // if (r-1 >= 0 && c >= 0 && r-1 < R && c < C && !visited[r-1][c]){
    //     visited[r-1][c] = 1;
    //     dfs(r-1,c,count+1,sum+input[r-1][c]);
    //     visited[r-1][c] = 0;
    // }
    //하
    if (r+1 >=0 && c >=0 && r+1 < R && c < C && !visited[r+1][c]){
        visited[r+1][c] = 1;
        dfs(r+1,c,count+1,sum+input[r+1][c]);
        visited[r+1][c] = 0;
    }
    //좌
    if (r >=0 && c-1 >=0 && r < R && c-1 < C && !visited[r][c-1]){
        visited[r][c-1] = 1;
        dfs(r,c-1,count+1,sum+input[r][c-1]);
        visited[r][c-1] = 0;
    }
    //우
    if (r >= 0 && c+1 >= 0 && r < R && c+1 < C && !visited[r][c+1]){
        visited[r][c+1] = 1;
        dfs(r,c+1,count+1,sum+input[r][c+1]);
        visited[r][c+1] = 0;
    }

}

for(let i=0; i<R; i++){
    for(let j=0; j<C; j++){
        visited[i][j] = 1;
        dfs(i,j,1,input[i][j]);
        visited[i][j] = 0;


        const [upR,upC] = [i-1,j];
        const [downR,downC] = [i+1,j];
        const [rightR,rightC] = [i,j+1];
        const [leftR,leftC] = [i,j-1];

        
        const top = upR >= 0 && upC >= 0 && upR < R && upC < C ? true : false;
        const bottom = downR >= 0 && downC >= 0 && downR < R && downC < C ? true : false;
        const right = rightR >= 0 && rightC >= 0 && rightR < R && rightC < C ? true : false;
        const left = leftR >= 0 && leftC >= 0 && leftR < R && leftC < C ? true : false;
        
        if (top && right && left){
            let tmp = input[i][j] + input[upR][upC] + input[rightR][rightC] + input[leftR][leftC];
            max = Math.max(tmp,max);
        }
        if (top && bottom && left){
            let tmp = input[i][j] + input[upR][upC] + input[downR][downC] + input[leftR][leftC];
            max = Math.max(tmp,max);
        }
        if (left && right && bottom){
            let tmp = input[i][j] + input[rightR][rightC] + input[downR][downC] + input[leftR][leftC];
            max = Math.max(tmp,max);
        }
        if (top && right && bottom){
            let tmp = input[i][j] + input[rightR][rightC] + input[downR][downC] + input[upR][upC];
            max = Math.max(tmp,max);
        }
    }
}

console.log(max);
