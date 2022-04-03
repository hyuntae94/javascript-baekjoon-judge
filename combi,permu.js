let array = [1,2,3,4];
let visit = new Array(4).fill(0);
function combination(tmp,start,index){
    if(index == 2){
        console.log(tmp)
        return ;
    }
    for(let i=start; i<array.length; i++){
            tmp[index] = array[i];
            combination(tmp,i+1,index+1);
        }
}
function permutation(tmp,index){
    if(index == 4){
        console.log(tmp);
        return ;
    }
    for(let i=0; i<4; i++){
        if(!visit[i]){
            visit[i] = 1;
            tmp[index] = array[i];
            permutation(tmp, index+1);
            visit[i] = 0;
        }
    }
}

combination([],0,0)
permutation([],0);
