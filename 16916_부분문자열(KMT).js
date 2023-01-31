const [S, P] = `ABABABABBABABABABC
ABABABABC`
  .toString()
  .trim()
  .split("\n");

const getPi = (p) => {
  const len = p.length;
  const pi = new Array(len).fill(0);
  let j = 0;

  for (let i = 1; i < len; i++) {
    while (j > 0 && p[i] !== p[j]) {
      j = pi[j - 1];
    }
    if (p[i] === p[j]) {
      pi[i] = ++j;
    }
  }
  return pi;
};

const KMP = (s, p) => {
  let answer = [];
  const pi = getPi(p);
  const sLen = s.length;
  const pLen = p.length;
  let j = 0;
  for (let i = 0; i < sLen; i++) {
    while (j > 0 && s[i] !== p[j]) {
      j = pi[j - 1];
    }
    if (s[i] === p[j]) {
      if (j === pLen - 1) {
        answer.push(i - pLen + 1);
        j = pi[j];
      } else {
        j++;
      }
    }
  }
  return answer;
};

// console.log(getPi(P));
console.log(KMP(S, P));
// KMP(S, P).length ? console.log(1) : console.log(0);
