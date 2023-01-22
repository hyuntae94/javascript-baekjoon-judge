const [[N], ...input] = `3
33 79
9 15
1022 1023`
  .toString()
  .trim()
  .split("\n")
  .map((el) => el.split(" ").map(Number));

const answer = [];

for (let [a, b] of input) {
  const divide1 = [a];
  const divide2 = [b];

  while (a !== 0) {
    const dividedTwo = parseInt(a / 2);
    if (a % 2 === 0) divide1.push(dividedTwo);
    else divide1.push(parseInt(dividedTwo));
    a = dividedTwo;
  }
  while (b !== 0) {
    const dividedTwo = parseInt(b / 2);
    if (b % 2 === 0) divide2.push(dividedTwo);
    else divide2.push(parseInt(dividedTwo));
    b = dividedTwo;
  }
  //   console.log(divide1, divide2);

  for (let i = 0; i < divide2.length; i++) {
    if (divide1.includes(divide2[i])) {
      answer.push(`${divide2[i]}0`);
      break;
    }
  }
}
console.log(answer.join("\n"));
