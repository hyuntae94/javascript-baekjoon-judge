const map = Array.from({ length : 51} , () => new Array(51).fill(null));
const parents = Array.from({ length : 51 } , () => new Array(51).fill(0));

for(let i=1; i<=50; i++){
    for(let j=1; j<=50; j++){
        parents[i][j] = i * 50 + j;
    }
}

const update1 = (r,c,value) => {
    //todo
    //r,c와 병합된 다른 셀들의 값도 바꿔줘야함. 
    const p = parents[r][c];
    
    for(let i=1; i<=50; i++){
        for(let j=1; j<=50; j++){
            if (parents[i][j] === p){
                map[i][j] = value;
            }
        }
    }
}

const update2 = (value1, value2) => {
    for(let i=1; i<=50; i++){
        for(let j=1; j<=50; j++){
            if (map[i][j] === value1) map[i][j] = value2;
        }
    }
}

const merge = (r1, c1, r2, c2) => {
    if (r1 === r2 && c1 === c2) return;
    //두 셀의 최상위 조상의 셀이 같은지 확인
    const aP = parents[r1][c1];
    const bP = parents[r2][c2];
    //최상위 조상이 같을 경우 패스
    if (aP === bP) return;
    //최상위 조상이 다를 경우
    if ((map[r1][c1] !== null && map[r2][c2] !== null) || (map[r1][c1] !== null && map[r2][c2] === null)){
        
        //(r2,c2)의  조상노드를 가지고 있는 모든 노드를 찾아 (r1,c1)값으로 변환
        for(let i=1; i<=50; i++){
            for(let j=1; j<=50; j++){
                if (parents[i][j] === bP){
                    parents[i][j] = aP;
                    map[i][j] = map[r1][c1];
                }
            }
        }
    } else if (map[r1][c1] === null && map[r2][c2] !== null){
        //(r1,c1)의 조상노드를 가지고 있는 모든 노드를 찾아 (r2,c2)값으로 변환
        for(let i=1; i<=50; i++){
            for(let j=1; j<=50; j++){
                if (parents[i][j] === aP){
                    parents[i][j] = bP;
                    map[i][j] = map[r2][c2];
                }
            }
        }
    } else if (map[r1][c1] === null && map[r2][c2] === null){
        for(let i=1; i<=50; i++){
            for(let j=1; j<=50; j++){
                if (parents[i][j] === aP){
                    parents[i][j] = bP;
                }
            }
        }
    }
}

const unmerge = (r,c) => {
    //todo
    const data = map[r][c];
    //(r,c)의 최상위 조상을 찾는다 
    const p = parents[r][c];
    //이 조상과 같은 모든 노드들의 조상값을 초기화시키고 null값으로 초기화
    for(let i=1; i<=50; i++){
        for(let j=1; j<=50; j++){
            if (parents[i][j] === p){
                parents[i][j] = 50 * i + j;
                map[i][j] = null;
            }
        }
    }
    //(r,c)만 해체 전 셀 값을 가지고 있음
    map[r][c] = data;
}

const print = (r,c) => {    
    if (map[r][c] === null) return "EMPTY";
    return map[r][c];
}

function solution(commands) {
    
    const answer = [];
    for(let command of commands){
        const splitCommand = command.split(' ');
        const order = splitCommand[0];
        
        if (order === 'UPDATE'){
            const len = splitCommand.length;
            //1. UPDATE r c value  => update1
            if (len === 4){
                update1(Number(splitCommand[1]), Number(splitCommand[2]), splitCommand[3]);
            } 
            //2. UPDATE value1 value2 => update2
            else if (len === 3){
                update2(splitCommand[1],splitCommand[2]);
            }
        } 
        //3. MERGE r1 c1 r2 c2
        else if(order === 'MERGE'){
            const r1 = Number(splitCommand[1]);
            const c1 = Number(splitCommand[2]);
            const r2 = Number(splitCommand[3]);
            const c2 = Number(splitCommand[4]);
            merge(r1,c1,r2,c2);
        } 
        //4. UNMERGE r c
        else if (order === 'UNMERGE'){
            const r = Number(splitCommand[1]);
            const c = Number(splitCommand[2]);
            unmerge(r,c);
        }
        //5. PRINT r c 
        else if (order === 'PRINT'){
            const r = Number(splitCommand[1]);
            const c = Number(splitCommand[2]);
            answer.push(print(r,c));
        }
    }
    
    return answer;
}