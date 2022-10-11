// let cube = `5 3 5 3 2 5 2 5 6 2 6 2 4 4 4 4 1 1 1 1 6 3 6 3`.toString().trim().split(' ').map(Number);
let cube = require('fs').readFileSync('./dev/stdin').toString().trim().split(' ').map(Number);

//큐브가 제대로 짝을 찾았는지 확인
/**
 * 
 * @param 회전시킨 큐브 
 * @returns 큐브의 6면체 모두 색이 같다면 true 아니고 false
 */
function isVaild(param){
    //1~4번
    for(let i=0; i<3; i++){
        if (param[i] !== param[i+1]) return false;
    }
    //5~8번
    for(let i=4; i<7; i++){
        if (param[i] !== param[i+1]) return false;
    }
    //9번~12번
    for(let i=8; i<11; i++){
        if (param[i] !== param[i+1]) return false;
    }
    //13번~16번
    for(let i=12; i<15; i++){
        if (param[i] !== param[i+1]) return false;
    }
    //17번~20번
    for(let i=16; i<19; i++){
        if (param[i] !== param[i+1]) return false;
    }
    //21번~24번
    for(let i=20; i<23; i++){
        if (param[i] !== param[i+1]) return false;
    }

    return true;
}

function up(){
    let copy = JSON.parse(JSON.stringify(cube));

    copy[23] = cube[0];
    copy[21] = cube[2];

    copy[8] = cube[23];
    copy[10] = cube[21];

    copy[4] = cube[8];
    copy[6] = cube[10];

    copy[0] = cube[4];
    copy[2] = cube[6];

    return copy;
}

function down(){
    let copy = JSON.parse(JSON.stringify(cube));

    copy[4] = cube[0];
    copy[6] = cube[2];

    copy[8] = cube[4];
    copy[10] = cube[6];

    copy[23] = cube[8];
    copy[21] = cube[10];

    copy[0] = cube[23];
    copy[2] = cube[21];

    return copy;
}

function left(){
    let copy = JSON.parse(JSON.stringify(cube));

    copy[20] = cube[12];
    copy[21] = cube[13];

    copy[16] = cube[20];
    copy[17] = cube[21];

    copy[4] = cube[16];
    copy[5] = cube[17];

    copy[12] = cube[4];
    copy[13] = cube[5];
    return copy;

}

function right(){
    let copy = JSON.parse(JSON.stringify(cube));

    copy[4] = cube[12];
    copy[5] = cube[13];

    copy[16] = cube[4];
    copy[17] = cube[5];

    copy[20] = cube[16];
    copy[21] = cube[17];

    copy[12] = cube[20];
    copy[13] = cube[21];
    return copy;

}

function rota90(){
    let copy = JSON.parse(JSON.stringify(cube));

    copy[16] = cube[2];
    copy[18] = cube[3];

    copy[9] = cube[16];
    copy[8] = cube[18];

    copy[15] = cube[9];
    copy[13] = cube[8];

    copy[2] = cube[15];
    copy[3] = cube[13];
    return copy;

}


function rota270(){
    let copy = JSON.parse(JSON.stringify(cube));

    copy[15] = cube[2];
    copy[13] = cube[3];

    copy[9] = cube[15];
    copy[8] = cube[13];

    copy[16] = cube[9];
    copy[18] = cube[8];

    copy[2] = cube[16];
    copy[3] = cube[18];
    return copy;

}

let tmp;
tmp = right();
if(isVaild(tmp)) {
    return 1;
}
tmp = left();
if(isVaild(tmp)) {

    return 1;
}
tmp = up();
if(isVaild(tmp)) {
    return 1;
}
tmp = down();
if(isVaild(tmp)) {
    return 1;
}
tmp = rota90();
if(isVaild(tmp)) {
    return 1;
}
tmp = rota270();
if(isVaild(tmp)) {
    return 1;
}

return 0;
