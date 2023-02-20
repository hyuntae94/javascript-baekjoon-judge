const [N, ...input] = `7
2
4
1
2
2
5
1`
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let answer = 0;
const stack = [];

for (let i = 0; i < N; i++) {
  let cnt = 1;
  while (stack.length && stack[stack.length - 1][0] <= input[i]) {
    const top = stack.at(-1);
    if (top[0] === input[i]) {
      cnt += top[1];
      answer += top[1];
      stack.pop();
    } else {
      answer += top[1];
      stack.pop();
    }
  }
  if (stack.length) answer += 1;
  stack.push([input[i], cnt]);
  console.log(stack);
}
console.log(answer);
