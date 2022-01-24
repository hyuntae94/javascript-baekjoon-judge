const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on("line",(line)=>{
    const [e,s,m] = line.split(' ').map(Number);
    let answer = 1;

    while (true){
        if (
            (answer-e)%15 === 0 && 
            (answer-s)%28 === 0 && 
            (answer-m)%19 === 0
        ){
            console.log(answer);
            process.exit();
        }
        answer++;
    }
})