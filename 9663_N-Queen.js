const N = +require('fs').readFileSync('./dev/stdin').toString();

const visited = new Array(N).fill(0);
let answer = 0;

function check(row){
    for(let i=0; i<row; i++){
        if (visited[i] === visited[row] || row-i === Math.abs(visited[i]-visited[row])){
            return false;
        }
    }
    return true;
}


function dfs(row){

    if (row === N){
        answer += 1;
        return;
    }

    for(let col=0; col<N; col++){
        visited[row] = col;

        if (check(row)){
            dfs(row+1);
        }
    }
}

dfs(0);

console.log(answer);