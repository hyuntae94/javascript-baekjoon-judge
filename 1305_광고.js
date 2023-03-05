const [L, input] = `6
aabaaa`
  .toString()
  .trim()
  .split("\n")
  .map((el, idx) => (idx ? el.split("") : +el));

const getPi = (param) => {
  const len = param.length;
  const pi = new Array(len).fill(0);
  let j = 0;
  for (let i = 1; i < len; i++) {
    while (j > 0 && param[i] !== param[j]) {
      j = pi[j - 1];
    }
    if (param[i] === param[j]) {
      pi[i] = ++j;
    }
  }
  return len - pi[len - 1];
};

console.log(getPi(input));
