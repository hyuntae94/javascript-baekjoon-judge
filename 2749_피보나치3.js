const N = BigInt("1000".toString().trim());
const pisano = 1500000;
const fibo = new Array(pisano + 1).fill(null);

fibo[0] = 0;
fibo[1] = 1;

for (let i = 2; i <= pisano; i++) {
  fibo[i] = fibo[i - 1] + fibo[i - 2];
  fibo[i] %= 1000000;
}

console.log(fibo[N % BigInt(pisano)]);
