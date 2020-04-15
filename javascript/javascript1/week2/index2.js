// #1 Flight booking fullname function.

function getFullname(firstName, surname, useFormalName) {
  if (useFormalName === true) {
    return "Lord" + " " + firstName + " " + surname;
  } else if (useFormalName !== true) {
    return firstName + " " + surname;
  }
}
const fullName = getFullname("Benjamin", "Hughes", true);
console.log(fullName);
console.log(getFullname("Benjamin", "Hughes", false));

const fullName1 = getFullname("Jon", "Yohanan");
console.log(fullName1);
const fullName2 = getFullname("Jon", "Snow");
console.log(fullName2);

// #2 Event application.

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
function EventWeekday(event) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const day = (currentDay + event) % 7;
  return `${weekdays[day]}`;
}
console.log(EventWeekday(5));

// #3 Weather wear.

function todaysWeather(temperature) {
  if (temperature <= 0) {
    return "Put on Winter Jackets, a sweater & Boots";
  } else if (temperature <= 5) {
    return "Put on just Winter Jackets & Boots";
  } else if (temperature >= 18) {
    return "Summer!!!, put on t-shirts, Shorts & sneakers";
  } else {
    return "Just walk naked";
  }
}
const clothesToWearToday = todaysWeather(18);
console.log(clothesToWearToday);

// #4 Student manager.

const class07Students = [];

function addStudentToClass(studentName) {
  if (getNumberOfStudents(class07Students) < 6) {
    if (studentName === " ") {
      return "student name can not be empty!" + "please enter a valid name";
    } else {
      for (let i = 0; i < getNumberOfStudents(class07Students); i++) {
        if (studentName === class07Students[i]) {
          return studentName + " is already in the class ";
        }
      }
    }
  } else if (studentName === "Queen") {
    console.log("she can be aded because she is " + studentName);
  } else {
    return "Cannot add more students to class 07";
  }

  class07Students.push(studentName);

  return "Sucessfully added!";
}

//returns the number of students in the class07Students array

function getNumberOfStudents(class07Students) {
  const arrayLength = class07Students.length;

  return arrayLength;
}

// this function shows who is currently added in class07

function showListsInClass(studentName) {
  for (let i = 0; i < studentName.length; i++) {
    console.log(studentName[i]);

    console.log(addStudentToClass(studentName[i]));
  }

  return;
}

//here is the test to all conditions

const name = [
  "Endam",
  "Manyi",
  "Benjamin",
  " ",
  "Emilia",
  "Andrew",
  "Otto",
  "Atud",
  "Stephen",
  "Queen"
];

showListsInClass(name);

console.log("Number of Students: " + getNumberOfStudents(class07Students));

function showStudentNameList(studentName) {
  for (let i = 0; i < studentName.length; i++) console.log(studentName[i]);

  return;
}

console.log("The list of students name in the class07:");

showStudentNameList(class07Students);



//#5 Candy Prices.(Optional)

const boughtCandyPrices = []
const amountToSpend = Math.random() * 100
console.log(amountToSpend);

function addCandy(candyType, weight) {
  if (candyType === 'Sweet') {
    boughtCandyPrices.push(0.5 * weight)
  } else if (candyType === 'Chocolate') {
    boughtCandyPrices.push(0.7 * weight)
  } else if (candyType === 'Toffee') {
    boughtCandyPrices.push(1.1 * weight)
  } else if (candyType === 'Chewinggum') {
    boughtCandyPrices.push(0.03 * weight)
  }
};
function canBuyMoreCandy(arrayOfPrices) {
  let totalPrice = 0
  for (let i = 0; i < arrayOfPrices.length; i++) {
    totalPrice = totalPrice + arrayOfPrices[i]
  }
  return totalPrice < amountToSpend
}

addCandy('Sweet', 10)
addCandy('Chocolate', 100)

console.log('boughtCandyPrices', boughtCandyPrices);

const isAbleToBuyMoreCandy = canBuyMoreCandy(boughtCandyPrices);

console.log(isAbleToBuyMoreCandy);
