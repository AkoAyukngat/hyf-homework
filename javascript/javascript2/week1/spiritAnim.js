const spiritAnimalName = [
  "The Tiger",
  "The Hawk",
  "Rattle Snake",
  "Cobra",
  "The Eagle",
  "Black Lion",
  "Flying Mantis",
  "Crouching Tiger",
  "Black Scorpion",
  "Quick Tortoise",
];
const buttonTag = document.getElementById("clickonMe");
buttonTag.addEventListener("click", spiritAnimal);
const inputName = document.getElementById("name");
//console.log("clicked");

function spiritAnimal() {
  if (!inputName.value) {
    alert("give a valid name");
  } else {
    document.getElementById(
      "spiritAnim"
    ).textContent = `${inputName.value} - ${randomSpiritAnimal}`;
  }
}

const randomName = Math.floor(Math.random() * spiritAnimalName.length);
const randomSpiritAnimal = spiritAnimalName[randomName];
