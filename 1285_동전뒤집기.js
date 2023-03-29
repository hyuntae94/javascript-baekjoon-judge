const [N, ...matrix] = `3
HHT
THH
THT`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx ? el.split("") : +el));
// console.log("N : ", N);
// console.log("matrix : ", matrix);

const copyMatrix = JSON.parse(JSON.stringify(matrix));

//배열 초기화
const reset = () => {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      copyMatrix[i][j] = matrix[i][j];
    }
  }
};

const array = new Array(N).fill(0).map((_, idx) => idx + 1);
const answer = [];

const combi = () => {
  const combination = (tmp, start, idx, cnt) => {
    if (idx === cnt) {
      answer.push(tmp.slice());
      return;
    }

    for (let i = start; i < array.length; i++) {
      tmp[idx] = array[i];
      combination(tmp, i + 1, idx + 1, cnt);
    }
  };

  for (let i = 1; i <= N; i++) {
    combination([], 0, 0, i);
  }
  return answer;
};

const solution = () => {
  let min = Number.MAX_SAFE_INTEGER;
  combi();

  for (let changeRow of answer) {
    for (let i = 0; i < changeRow.length; i++) {
      const row = changeRow[i] - 1;
      for (let col = 0; col < N; col++) {
        copyMatrix[row][col] === "H"
          ? (copyMatrix[row][col] = "T")
          : (copyMatrix[row][col] = "H");
      }
    }

    //열확인
    let count = 0;
    for (let i = 0; i < N; i++) {
      let t_cnt = 0;
      for (let j = 0; j < N; j++) {
        if (copyMatrix[j][i] === "T") t_cnt += 1;
      }
      count += Math.min(t_cnt, N - t_cnt);
    }

    min = Math.min(count, min);

    reset();
  }
  console.log(min);
};

solution();
