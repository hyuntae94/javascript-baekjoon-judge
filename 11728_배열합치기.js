const [[N, M], ...input] = `4 3
2 3 5 9
1 2 5 7`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const A = input[0];
const B = input[1];

let [i, j] = [0, 0];
const answer = [];
while (i < A.length && j < B.length) {
  if (A[i] < B[j]) {
    answer.push(A[i]);
    i++;
  } else if (A[i] > B[j]) {
    answer.push(B[j]);
    j++;
  } else if (A[i] === B[j]) {
    answer.push(A[i], B[j]);
    i++;
    j++;
  }
}

if (i >= A.length) {
  for (let k = j; k < B.length; k++) {
    answer.push(B[k]);
  }
} else if (j >= B.length) {
  for (let k = i; k < A.length; k++) {
    answer.push(A[k]);
  }
}

console.log(answer.join(" "));
