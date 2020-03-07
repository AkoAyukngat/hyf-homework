// #1 Flight booking fullname function.

function getFullname(firstname, surname) {
  return firstname + " " + surname;
}
const fullname1 = getFullname("Emilia", "Tambe");
const fullname2 = getFullname("Ako", "Ayukngat");
const fullname = getFullname("Benjamin", " Hughes");
console.log(fullname1);
console.log(fullname2);
console.log(fullname);
let formalname = "Lord" + " " + fullname;
if ((useFormalname = true)) {
  console.log(formalname);
} else {
  console.log(fullname);
}

// #2 Event application.

let weekdays = [
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

let class07Students = ["Ako", "Maggi", "Martha", "Manyi", "Emilia", "Otto"];
function addStudentToClass(studentName) {
  if (class07Students.length > 6) {
    return "cannot add more students to class 07";
  } else if (class07Students.includes(studentName)) {
    return studentName + " " + "is already in class";
  } else if (studentName === "Queen" && class07Students.length >= 6) {
    return class07Students.push(studentName) + " " + "Queen B";
  } else if ((studentName = undefined)) {
    console.error("please we can't teach an empty chair");
  }
}
class07Students = addStudentToClass("Queen");
console.log(addStudentToClass("Manyi"));
console.log(addStudentToClass("Ako"));

function getNumberOfStudents() {
  return class07Students.length;
}

let numberOfStudents = getNumberOfStudents();
console.log("Number of students" + " " + numberOfStudents);
console.log(class07Students);

/*Please i will need a smooth strategy to tackle this part of the assignment (#student Manager)*/
