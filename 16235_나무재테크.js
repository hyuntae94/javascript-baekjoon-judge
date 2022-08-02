let [[N,M,K],...input] = '5 2 6\n2 3 2 3 2\n2 3 2 3 2\n2 3 2 3 2\n2 3 2 3 2\n2 3 2 3 2\n2 1 3\n3 2 3'.toString()
// let [[N,M,K],...input] = require('fs').readFileSync("./dev/stdin").toString().trim()
.split('\n').map(el => el.split(' ').map(Number));
let trees = [];

for(let i=0; i<M; i++){
    trees.push(input.pop());
}
const a = JSON.parse(JSON.stringify(input));
let minerals = Array.from({length:N}, ()=> new Array(N).fill(5));


// console.log(A,trees,minerals);
const dx=[-1,-1,-1,1,1,1,0,0];
const dy=[-1,0,1,-1,0,1,-1,1];


for(let year=0; year<K; year++){
    
    let index = 0;
    let tmpTrees = [];
    let children = [];
    let diedTrees = [];
    while(index < trees.length){
        // console.log(trees);
        const [row,col,age] = trees[index++];
        //양분섭취가능
        if(minerals[row-1][col-1] >= age){
            minerals[row-1][col-1] -= age;
            tmpTrees.push([row,col,age+1])
        }
        //죽은나무 찾기
        else {
            diedTrees.push([row,col,age])
        }
    }
    //양분 추가
    index = 0;
    while(index < diedTrees.length){
        const [row,col,age] = diedTrees[index++];
        minerals[row-1][col-1] += Math.floor(age/2);
    }
    
    index=0;
    while(index < tmpTrees.length){
        const [row,col,age] = tmpTrees[index++];
        //번식
        if(age % 5 === 0){
            for(let i=0; i<8; i++){
                const [moveRow, moveCol] = [row-1+dx[i], col-1+dy[i]];
                if (moveRow >= 0 && moveCol >= 0 && moveRow < N && moveCol < N){
                    children.push([moveRow+1,moveCol+1,1])
                }
            }
        }
    }
    minerals = minerals.map((els,row) => 
        els.map((el,col) => el+a[row][col]));

    trees = children.concat(tmpTrees);
}
console.log(trees.length);
