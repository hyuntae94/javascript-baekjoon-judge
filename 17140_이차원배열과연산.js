let [[r,c,k], ...matrix] = `1 2 3
1 2 1
2 1 3
3 3 3`.toString().split('\n').map(el => el.split(' ').map(Number));

//행 또는 열을 입력받고 수의크기와 수의 등장횟수를 비교하여 새로운 배열 반환
const changeArray = (arr) => {

    const map = new Map();

    arr.forEach((val) => {
        if (map.get(val)){
            map.set(val, map.get(val)+1)
        } else map.set(val,1);
    })
    // console.log(map);
    const mapToArray = [...map];

    mapToArray.sort((a,b) => {
        if (a[1]<b[1]) return a[1]-b[1];
        else if (a[1] === b[1] && a[0]<b[0]) return a[0]-b[0];
    })

    return [].concat(...mapToArray);    
   
}

//행의 길이 와 열의 길이

const checkRowColumnLength = () => {
    const rowLength = matrix.length;
    
    let colMaxLen = Number.MIN_SAFE_INTEGER;
    matrix.forEach((el) => {
        const len = el.length;
        if(len > colMaxLen) colMaxLen = len;
    })

    return rowLength >= colMaxLen ? 'R' : 'C';
}

const row = () => {
    const tmpMatrix = [];
    matrix.forEach((eachRow) => tmpMatrix.push(changeArray(eachRow)));

    matrix = tmpMatrix;
}

const transposes = (param) => {
    const transpose = param.reduce(
        (result, row) => row.map((_, i) => [...(result[i] || []), row[i]]),
        []
    );

    return transpose
}

const col = () => {

    let tmpMatrix = [];
    let tmp = transposes(matrix);
    console.log(tmp)
    tmp.forEach((eachRow) => tmpMatrix.push(changeArray(eachRow)));

    matrix = transposes(tmpMatrix);
}

let count = 0;

do{
    if (matrix[r-1][c-1] === k) {
        console.log(count);
        return ;
    } 

    if(checkRowColumnLength() === 'R'){
        row();
    } else {
        col();
    }
    // console.log(matrix);
    count += 1;
}while(count <= 2)

console.log(-1);