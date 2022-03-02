let input = "3\n4\n7\n10".toString().trim().split("\n").map(Number);
let memo = [0,1,2,4];

input.shift();

for (let x of input){
    for (let start = 4; start <= x; start++){
        memo[start] = memo[start-1] + memo[start-2] + memo[start-3];
    }
    console.log(memo[x]);
}