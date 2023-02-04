//이 문제의 풀이 포인트는 '지수법칙'과 '모듈러 성질'
//지수법칙
// pow(a,10) = pow(a,5) * pow(a,5);
//모듈러 성질
//(a*b)%c = ((a%c)*(b%c))%c;
const [A, B, C] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

const setPow = (base, exponent) => {
  if (exponent === 1n) return base % C;

  const tmp = setPow(base, exponent / 2n);

  if (exponent % 2n) {
    //((tmp * tmp % C) * (base % C)) % C
    // ((tmp * tmp % C) % C))
    // return (((tmp * tmp) % C) * base) % C;
    return (tmp * tmp * base) % C;
  }
  return (tmp * tmp) % C;
};

console.log(setPow(A, B) % C);

// const [A, B, C] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split(' ')
//   .map(BigInt);

// const solve = (power) => {
//   if (power === 1n) {
//     return A;
//   }

//   const half = solve(power / 2n) % C;

//   if (power % 2n) {
//     return (half * half * A) % C;
//   }

//   return (half * half) % C;
// };

// console.log((solve(B) % C).toString());
