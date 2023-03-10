const [T, P] = `ABC ABCDABD ABCDABCDABDE
ABCDABD`
  .toString()
  .trim()
  .split("\n");

const find = (P) => {
  const pLen = P.length;
  const pi = new Array(pLen).fill(0);
  let j = 0;
  for (let i = 1; i < pLen; i++) {
    while (j > 0 && P[i] !== P[j]) {
      j = pi[j - 1];
    }
    if (P[i] === P[j]) {
      pi[i] = ++j;
    }
  }
  return pi;
};

const KMT = (T, P) => {
  const pi = find(P);

  const answer = [];
  let j = 0;
  for (let i = 0; i < T.length; i++) {
    while (j > 0 && T[i] !== P[j]) {
      j = pi[j - 1];
    }

    if (T[i] === P[j]) {
      if (j === P.length - 1) {
        answer.push(i - P.length + 2);
        j = pi[j];
      } else {
        j++;
      }
    }
  }
  return answer.length + "\n" + answer.join(" ");
};

console.log(KMT(T, P));
