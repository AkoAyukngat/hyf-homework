//Age-ify (A future age calculator)
const yearOfBirth = 1987;
const yearFuture = 2027;
console.log(yearFuture - yearOfBirth);

const age = 40;
console.log(
  "You will be" + " " + age + " " + "years old in" + " " + yearFuture + "."
);

//Goodboy-Oldboy (A dog age calculator)

const dogYearOfBirth = 1957;
const dogYearFuture = 2027;
console.log(dogYearFuture - dogYearOfBirth);

const dogYear = 70;

if (dogYear < 70) {
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture
  );
} else {
  console.log(
    "Your dog will be " + dogYear + " dog years old in " + dogYearFuture
  );
}

//Housey pricey (A house price estimator).

//Peter
let housePrice = 2.5;
let volumeInMeters = 8 * 10 * 10;
let gardenSizeInM2 = 100;

console.log((housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300));
let costOfHouse = 2.03;

//Julia

housePrice = 1.0;
volumeInMeters = 5 * 11 * 8;
gardenSizeInM2 = 70;

console.log((housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInM2 * 300));
costOfHouse = 1.121;

if (housePrice < costOfHouse) {
  console.log("paid less");
} else {
  console.log("paid too much");
}

//Ez Namey (Startup name generator)

const firstWords = ["Mega", "Awesome", "Flash", "Otto", "Andrew"];
const secondWords = ["Comp", "Java", "Point", "It", "ltd"];

const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * secondWords.length);

const startupName =
  firstWords[randomNumber1] + " " + secondWords[randomNumber2];

console.log(startupName);
