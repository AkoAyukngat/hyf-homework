// #1 Doubling the odd numbers in an array:

const numbers = [1, 2, 3, 4];
const doublingOddNumbers = numbers
  .filter((numbers) => numbers % 2 === 1)
  .map((numbers) => numbers * 2);
console.log(doublingOddNumbers);
