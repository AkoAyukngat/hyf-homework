//#1 Create an array with 3 items,iterate through the array and call all the functions:

const arrayOfFunctions = [
  function oldBooks() {
    console.log("Jane Eyre");
  },
  function spices() {
    console.log("Turmeric");
  },
  function bread() {
    console.log("Walnut Bread");
  },
];

arrayOfFunctions.forEach(func => func());


//#2 Create a function as a const and try creating a function normally:

const todaysLunch = () => {
  console.log("Stewed Cow Livers");
};

function sunBathingHour() {
  console.log("13:00");
}

todaysLunch();
sunBathingHour();

//#3 Create an object that has a key whose value is a function:

const omega3Supplements = {
  ingredients1: "fish oil",
  ingredients2: "Water",
  ingredients3: function vitamines() {
    console.log("vit: A,D,E & K");
  },
};
omega3Supplements.ingredients3();
