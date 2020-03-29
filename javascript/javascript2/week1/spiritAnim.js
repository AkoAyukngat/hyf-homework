const spiritAnimalName = [
  "The Tiger",
  "The Hawk",
  "Rattle Snake",
  "Cobra",
  "The Eagle",
  "Black Lion"
];
const buttonTag = document.getElementById("clickonMe");
buttonTag.addEventListener("click", spiritAnimal);

function spiritAnimal() {
  const inputName = document.getElementById("name"); //u can also put .value here
  console.log("clicked");
  if (!inputName.value) {
    alert("give a valid name");
  } else {
    const randomName = Math.floor(Math.random() * spiritAnimalName.length);
    const randomSpiritAnimal = spiritAnimalName[randomName];
    document.getElementById(
      "spiritAnim"
    ).textContent = `${inputName.value} ${randomSpiritAnimal}`;
  }
}

//onclick="spiritAnimalName()"
