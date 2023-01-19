const [[k], input] = `3
1 6 4 3 5 2 7`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

input.unshift(null);

const answer = Array.from({ length: k }, () => new Array());

const divided = (start, end, depth) => {
  const center = parseInt((end + start) / 2);
  //종료문
  if (depth === k - 1) {
    answer[depth - 1].push(input[center]);
    answer[depth].push(input[start], input[end]);
    return;
  }

  //왼쪽
  divided(start, center - 1, depth + 1);
  //오른쪽
  divided(center + 1, end, depth + 1);

  answer[depth - 1].push(input[center]);
};

divided(1, Math.pow(2, k) - 1, 1);
answer.map((el) => console.log(el.join(" ")));
