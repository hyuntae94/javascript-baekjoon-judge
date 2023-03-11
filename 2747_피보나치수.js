const input = +`90`.toString().trim();

const array = new Array(input + 1).fill(0n);
array[0] = 0n;
array[1] = 1n;

for (let i = 2; i <= input; i++) {
  array[i] = array[i - 1] + array[i - 2];
}
console.log(array);
