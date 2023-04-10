const [[N,L],...query] = `3 3
1 6
13 17
8 12`.toString().trim().split('\n').map(el => el.split(' ').map(Number));

query.sort((a,b)=>{
    if(a[0] === b[0]) return a[1]-b[1];
    return a[0]-b[0];
});

let range = 0;
let ans = 0;

for(let i=0; i<N; i++){
    if (query[i][0] > range) range = query[i][0];
    if (query[i][1] > range){
        while(query[i][1] > range){
            range += L;
            ans += 1;
        }
    }
}
console.log(ans);

