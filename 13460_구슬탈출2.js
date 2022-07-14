const [[N,M],...input] = '10 10\n##########\n#R#...##B#\n#...#.##.#\n#####.##.#\n#......#.#\n#.######.#\n#.#....#.#\n#.#.##...#\n#O..#....#\n##########'.toString()
// const [[N,M],...input] = '3 10\n##########\n#.O....RB#\n##########'.toString()
// const [[N,M],...input] = '3 7\n##########\n#R.O.B#\n##########'.toString()
// const [[N,M],...input] = '10 10\n##########\n#R#...##B#\n#...#.##.#\n#####.##.#\n#......#.#\n#.######.#\n#.#....#.#\n#.#.#.#..#\n#...#.O#.#\n##########'.toString()
// const [[N,M],...input] = require('fs').readFileSync('./dev/stdin').toString()
.split('\n').map((el,idx) => idx === 0 ? el.split(' ').map(Number) : el.split(''));
 
let [rRow, rCol, bRow, bCol] = [0,0,0,0]; 

const visitedRed = Array.from({length:N}, () => new Array(M).fill(0));
const visitedBlue = Array.from({length:N}, () => new Array(M).fill(0));

for(let i=0; i<N; i++){
    for(let j=0; j<M; j++){
        if (input[i][j] === 'R'){
            rRow = i;
            rCol = j;
        }
        else if (input[i][j] === 'B'){
            bRow = i;
            bCol = j;
        }
        else if (input[i][j] === '#'){
            visitedRed[i][j] = 1;
            visitedBlue[i][j] = 1;
        }
    }
}

let queue = [[rRow, rCol, bRow, bCol,0]];
visitedRed[rRow][rCol] = 1;
visitedBlue[bRow][bCol] = 1;
let idx = 0;
while(idx<queue.length){
    const dx = [-1,0,1,0];
    const dy = [0,1,0,-1];
    const [rR, rC, bR, bC, totMove] = queue[idx++];
    
    if (totMove >= 10) continue;

    for(let i=0; i<4; i++){
        let [end, move_red, move_blue] = [0,0,0];
        let [nextRedRow, nextRedCol, nextBlueRow, nextBlueCol] = [rR, rC, bR, bC];

        while(input[nextBlueRow+dx[i]][nextBlueCol+dy[i]] !== '#' &&
                    !visitedBlue[nextBlueRow+dx[i]][nextBlueCol+dy[i]]){
            nextBlueRow += dx[i];
            nextBlueCol += dy[i];
            move_blue += 1;
            console.log(nextBlueRow+dx[i],nextBlueCol+dy[i]);
            visitedBlue[nextBlueRow+dx[i]][nextBlueCol+dy[i]] = 1;

            if (input[nextBlueRow][nextBlueCol] === 'O'){
                end -= 2;
                break;
            }
        }
        if (end < 0) continue;
        while(input[nextRedRow+dx[i]][nextRedCol+dy[i]] !== '#' &&
                !visitedRed[nextRedRow+dx[i]][nextRedCol+dy[i]]){
            nextRedRow += dx[i];
            nextRedCol += dy[i];
            move_red += 1;
            visitedRed[nextRedRow+dx[i]][nextRedCol+dy[i]] = 1;

            if (input[nextRedRow][nextRedCol] === 'O'){
                end += 1;
                break;
            }
        }
        if (nextRedRow === nextBlueRow && nextRedCol === nextBlueCol){
            if (move_blue > move_red){
                visitedBlue[nextBlueRow][nextBlueCol] = 0;
                nextBlueRow -= dx[i];
                nextBlueCol -= dy[i];
            } else {
                visitedRed[nextRedRow][nextRedCol] = 0;
                nextRedRow -= dx[i];
                nextRedCol -= dy[i];
            }
        }
        if (end) {
            if (totMove>10) console.log(-1);
            else console.log(totMove+1);
            return ;
        }
        queue.push([nextRedRow,nextRedCol,nextBlueRow,nextBlueCol,totMove+1]);
    }
}

console.log(-1);
