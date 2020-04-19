// VOICE ASSISTANT COMMAND HOME WORK

let names = [];
let whoAmI = "What is my name";
let day = "What day is it today";
let todo = [];
let myTodoList = "What is on my todo";
let favDish = [];
let event = [];
let eventQuestion = "What am I doing this week";

function getReply(command) {
  let stringArray = command.split(" ");
  if (command.startsWith("Hello my name is")) {
    let name = stringArray[stringArray.length - 1];

    names.push(name);
    return `nice to meet you ${name}`;
  }

  if (command === whoAmI && names.length !== 0) {
    return `your name is ${names}`;
  }

  if (command === whoAmI && names.length === 0) {
    return `Please tell me your name and I'll remember it for next time`;
  }

  //WHAT DATE IS IT TODAY?

  if (command === day) {
    let monthsOfTheYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth();
    const year = today.getFullYear();

    return `Today is ${day} of ${monthsOfTheYear[month]} ${year}`;
  }

  //TO DO

  if (command.startsWith("Add") && command.endsWith("todo")) {
    let addTodoWord = command.split(" ");
    todo.push(addTodoWord[1]);
    return `${addTodoWord[1]} added to your todo`;
  }
  if (command.startsWith("Remove") && command.endsWith("todo")) {
    let removeTodoWord = command.split(" ");
    //   console.log(todo.splice(todo.indexOf(removeTodoWord,1)));
    return `${removeTodoWord[1]} removed from your todo`;
  }
  if (command === myTodoList) {
    return `you have ${todo.join(" & ")} in your todo`;
  }

  //FAVORITE DISH

  if (command.startsWith("My favorite") && command.includes("dish")) {
    let dishWordArray = command.split(" ");
    let dishWord = dishWordArray[dishWordArray.length - 1];
    favDish.push(dishWord);
    return "favourite dish given";
  }
  if (command.startsWith("What is") && command.endsWith("favorite dish")) {
    return `your favorite dish is ${favDish.join(" and ")}`;
  }

  //SET TIMER
  if (command.startsWith("Set a timer")) {
    let timerArray = command.split(" ");
    let counter = timerArray[5];
    let timeForAlarm = timerArray[4];
    let timeToMilliseconds = timeForAlarm * 60 * 1000;

    setTimeout(function () {
      alert("Timer done");
    }, timeToMilliseconds);
    return `Timer set for ${timeForAlarm} ${counter}`;
  }

  //SIMPLE MATHEMATICS:

  if (command.includes("+")) {
    let a = +stringArray[2];
    let b = +stringArray[4];
    let answer = a + b;
    return `${answer}`;
  }
  if (command.includes("*")) {
    let a = +stringArray[2];
    let b = +stringArray[4];
    let answer = a * b;
    return `${answer}`;
  }
  if (command.includes("/")) {
    let a = +stringArray[2];
    let b = +stringArray[4];
    let answer = a / b;
    return `${answer}`;
  }

  //EVENT CALENDER
  if (command.startsWith("Add") && command.endsWith("calendar")) {
    let thingsOnCalendarArray = command.split(" ");
    let thingsOnCalendar = thingsOnCalendarArray[1];
    let thingsOnCalendarDate = thingsOnCalendarArray[3];
    event.push({ name: thingsOnCalendar, date: thingsOnCalendarDate });
    return `${thingsOnCalendar} on ${thingsOnCalendarDate} added to your calendar `;
  }

  if (command.startsWith("What am I") && command.endsWith("week")) {
    let event = "Bike ride the 03.of April 2020";
    let eventQuestion = command.split(" ");
    eventQuestion.push(event);
    return `This week you have 1 event:${event}`;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("What day is it today"));
console.log(getReply("Add homework to my todo"));
console.log(getReply("Add cooking to my todo"));
console.log(getReply("Remove dancing from my todo"));
console.log(getReply("Add fitness to my todo"));
console.log(getReply("What is on my todo"));
console.log(getReply("what is 12 * 3"));
console.log(getReply("what is 17 + 3"));
console.log(getReply("what is 100 / 3"));
console.log(getReply("My favorite dish is Achu"));
console.log(getReply("What is my favorite dish"));
console.log(getReply("Set a timer for 7 minutes"));
console.log(getReply("Add conference the 03.05.2020 to my calendar"));
console.log(getReply("What am I doing this week"));
