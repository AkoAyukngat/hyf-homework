// #1 Doubling the odd numbers in an array:

// const numbers = [1, 2, 3, 4];
// const oddNumbers = numbers.filter(function (numbers) {
//     return numbers % 2 === 1;
// });
// console.log(oddNumbers);

// const unevenNumbers = [1, 3];
// const newNumbers = unevenNumbers.map(function (unevenNumbers) {
//     return unevenNumbers * 2;
// });
// console.log(newNumbers);

//using Arrow Functions:

const numbers = [1, 2, 3, 4];
const doublingOddNumbers = numbers
  .filter(numbers => numbers % 2 === 1)
  .map(numbers => numbers * 2);
console.log(doublingOddNumbers);
