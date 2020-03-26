// VOICE ASSISTANT COMMAND HOME WORK

let string = "Hello my name is Benjamin";
let stringArray = string.split(" ");
let name = stringArray[stringArray.length - 1];
let names = [];
let whoAmI = "What is my name";
let day = "What day is it today";
let todo = [];
let myTodoList = "What is on my todo";
let favDish = [];
let event = [];
let eventQuestion = "What am I doing this week";

function getReply(command) {
  //finding it hard to make this statement work
  if (command === string) {
    for (let i = 0; i < names.length; i++) {
      if (command === whoAmI && names[i] === names[i]) {
        return "you have already introduced yourself";
      }
    }
    names.push(name);
    return `nice to meet you ${name}`;
  }

  if (command === whoAmI && names.length !== 0) {
    return `your name is ${names}`;
  }

  if (command === whoAmI && names.length === 0) {
    return `Please tell me your name and I'll remember it for next time`;
  }

  //What date it is today?
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
      "December"
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
    return " ";
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

    setTimeout(function() {
      alert("Timer done");
    }, timeToMilliseconds);
    return `Timer set for ${timeForAlarm} ${counter}`;
  }

  //EVENT CALENDER
  if (command.startsWith("Add") && command.endsWith("calendar")) {
    let thingsOnCalendarArray = command.split(" ");
    let thingsOnCalendar = thingsOnCalendarArray[1];
    console.log(thingsOnCalendar);
    let thingsOnCalendarDate = thingsOnCalendarArray[3];
    console.log(thingsOnCalendarDate);
    event.push({ name: thingsOnCalendar, date: thingsOnCalendarDate });
    return `${thingsOnCalendar} on ${thingsOnCalendarDate} added to your calendar `;
  }

  if (command.startsWith("What am I") && command.endsWith("week")) {
    let event = "Bike ride the 3.of May 2019";
    let eventQuestion = command.split(" ");
    eventQuestion.push(event);
    return "This week you have 1 event:" + " " + event;
  }
}

console.log(getReply("Hello my name is Benjamin"));
console.log(getReply("What is my name"));
console.log(getReply("What is my name"));
//console.log(names);
console.log(getReply("What day is it today"));
console.log(getReply("Add homework to my todo"));
console.log(getReply("Add cooking to my todo"));
console.log(getReply("Remove dancing from my todo"));
console.log(todo);
console.log(getReply("Add fitness to my todo"));
console.log(getReply("What is on my todo"));
//console.log(getReply(3 + 3))
console.log(getReply("My favorite dish is Achu"));
//console.log(favDish);
console.log(getReply("What is my favorite dish"));
console.log(getReply("Set a timer for 4 minutes"));
console.log(getReply("Add conference the 3/5/2019 to my calendar"));
console.log(event);
console.log(getReply("What am I doing this week"));
