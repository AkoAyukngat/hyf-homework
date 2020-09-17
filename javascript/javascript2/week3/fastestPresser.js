const timerInput = document.querySelector("#inputButton");
const startGame = document.querySelector("#button1");

const playerS = document.querySelector(".PlyS");
const playerL = document.querySelector(".PlyL");
const result = document.querySelector(".Result");
const startAgain = document.querySelector(".Restart");

let counterS = 0;
let counterL = 0;

//#2 Set a timeout for the time specified by the user:

function playGame() {
  setTimeout(() => {
    if (!timerInput.value) {
      alert("Please enter gaming time");
    } else {
      alert("Game Over!");

      const playerResult = () => {
        if (counterS > counterL) {
          result.innerHTML = "Player S won!";
        }
        if (counterL > counterS) {
          result.innerHTML = "Player L won!";
        }
        if (counterS === counterL) {
          result.innerHTML = "It was a draw";
        }
        if (counterS && counterL === 0) {
          result.innerHTML = "start game";
        }
      };
      playerResult();
    }
  }, timerInput.value * 1000);
}
//#3 Create an event listener so you can call a function when any key is pressed:
startGame.addEventListener("click", playGame);

//#4 Keep a counter for how many times l and s was pressed:
function keyPressCounter(keyPress) {
  if (keyPress.key === "l") {
    counterL++;
    playerL.innerHTML = `${counterL}`;
    console.log(`${counterL}`);
  }
  if (keyPress.key === "s") {
    counterS++;
    playerS.innerHTML = `${counterS}`;
    console.log(`${counterS}`);
  }
}
document.addEventListener("keypress", keyPressCounter);

//#5 Start a new game functionality:

function startAllOver() {
  location.reload();
}
startAgain.addEventListener("click", startAllOver);
