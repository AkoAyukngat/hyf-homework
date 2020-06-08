//PART ONE

// #1 Finding the shortest word of an Array.
const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function findingShortestWord(str) {
  let shortWord = Infinity;
  let shortest;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length < shortWord) {
      shortWord = str[i].length;
      shortest = str[i];
    }
  }
  return shortest;
}
console.log(findingShortestWord(danishWords));

//#2Finding the Average & Median:
const housePrices = [
  3000000,
  3500000,
  1300000,
  40000000,
  100000000,
  8000000,
  2100000
];

//Calculating the average house price:
function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
//console.log(average(housePrices));

//Calculating the median house price:
function median(numbers) {
  let len = numbers.length;
  let median = Math.ceil(len / 2);
  if (len % 2 === 0) {
    housePrices[median] + housePrices[median - 1] / 2;
  }

  return housePrices[median - 1];
}
//console.log(median(housePrices));

//Returning the values of average & median in an Object:
function getAverageAndMedian(housePrices) {
  const averageAndMedian = {
    average: average(housePrices),
    median: median(housePrices)
  };
  return averageAndMedian;
}
console.log(getAverageAndMedian(housePrices));

//Rendering the prices, the average and median in a web page.
const ulTag = document.querySelector("ul");

const liTag = document.createElement("li");
liTag.innerHTML = `The house prices are:${housePrices}`;
ulTag.appendChild(liTag);

const liTag2 = document.createElement("li");
liTag2.innerHTML = `The average price is: ${average(housePrices)}`;
ulTag.appendChild(liTag2);

const liTag3 = document.createElement("li");
liTag3.innerHTML = `The median price is: ${median(housePrices)}`;
ulTag.appendChild(liTag3);
