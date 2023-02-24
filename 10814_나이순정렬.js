const input = `5
2 Kim
11 Park
21 Junkyu
21 Dohyun
20 Sunyoung`
  .toString()
  .trim()
  .split("\n");

const res = Array.from({ length: 201 }, () => "");

for (let i = 1; i <= +input[0]; i++) {
  const [age, name] = input[i].split(" ");
  res[+age] += input[i] + "\n";
}
console.log(res.join(""));
//   .map((el, idx) => [+el.split(" ")[0], el.split(" ")[1], idx]);

// input.sort((a, b) => {
//   if (a[0] === b[0]) return a[2] - b[2];
//   return a[0] - b[0];
// });
// const answer = input
//   .map((el) => {
//     el.pop();
//     return el.join(" ");
//   })
//   .join("\n");
// console.log(answer);
