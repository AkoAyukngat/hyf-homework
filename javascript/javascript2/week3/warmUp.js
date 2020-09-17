//#1 Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded:
const logOutText = () => {
  console.log("called after 2.5 seconds");
};
setTimeout(logOutText, 2500);

//#2 Create a function that takes 2 parameters: delay and stringToLog.

function delayLogStrings(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

delayLogStrings(5, "this string logs out after 5 seconds");

//#3 Part of exercise three:

const divTag = document.querySelector("div");
const newElement = document.createElement("button");
newElement.innerHTML = "Call after delay";
divTag.appendChild(newElement);

document
  .querySelector("button")
  .addEventListener("click", (delayLogStrings) => {
    setTimeout(() => {
      console.log("Called after 5 seconds");
    }, 5000);
  });

//#4 Create two functions and assign them to two different variables:

const earthLogger = () => {
  console.log("Earth");
};

const saturnLogger = () => {
  console.log("Saturn");
};

const planetLogFunction = (planet) => {
  planet();
};
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

//#5 Create a button with the text called "Log location":

const divTag2 = document.getElementById("log");
const buttonTag = document.createElement("button");
buttonTag.innerHTML = "Log Location";
divTag2.appendChild(buttonTag);

const userLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    console.log("Not Supported");
  }
};
onSuccess = (position) => {
  const { longitude, latitude } = position.coords;

  //#6 Showing Location on Map:
  const url = `https://www.latlong.net/c/?lat=${latitude}&long=${longitude}`;
  document.querySelector("a").setAttribute("href", url);

  console.log(`Your Longitude:${longitude}`);
  console.log(`Your Latitude:${latitude}`);
};
onError = (error) => {
  console.log(error);
};

document.getElementById("log").addEventListener("click", userLocation);

//#7 Create a function called runAfterDelay:

const runAfterDelay = (delay, callback) => {
  setTimeout(() => {
    callback();
  }, delay * 1000);
};
runAfterDelay(4, function () {
  console.log("should be logged after 4 seconds");
});
runAfterDelay(10, function () {
  console.log("I love HYF");
});

//#8 Check if we have double clicked on the page:

const checkForDoubleClick = () => {
  console.log("Double Click!");
};
document.addEventListener("dblclick", checkForDoubleClick);

//#9 Create a function called jokeCreator:

const logFunnyJoke = () => {
  const funnyJokes = "she mimicked a masculine voice";
  console.log(funnyJokes);
};
const logBadJoke = () => {
  const badJokes = "The cat sat on fire";
  console.log(badJokes);
};

const jokeCreator = (shouldTellFunnyJoke, logFunnyJoke, logBadJoke) => {
  if (shouldTellFunnyJoke === true) {
    return logFunnyJoke();
  } else {
    return logBadJoke();
  }
};
jokeCreator(true, logFunnyJoke, logBadJoke);
jokeCreator(false, logFunnyJoke, logBadJoke);
