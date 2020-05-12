const translateOneByOne = () => {
  moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
    x: 20,
    y: 300,
  }).then(() => {
    console.log("Red circle has just been moved");
  });
  moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
    x: 400,
    y: 300,
  }).then(() => {
    console.log("Blue circle was moved");
  });
  moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
    x: 400,
    y: 20,
  }).then(() => {
    console.log("Green circle flew to its position");
  });
};
translateOneByOne();

//Promise.all:

const translateAllAtOnce = () => {
  Promise.all([
    moveElement(document.querySelector("ul.marks li:nth-child(1)"), {
      x: 20,
      y: 300,
    }),
    moveElement(document.querySelector("ul.marks li:nth-child(2)"), {
      x: 400,
      y: 300,
    }),
    moveElement(document.querySelector("ul.marks li:nth-child(3)"), {
      x: 400,
      y: 20,
    }),
  ]).then(() => {
    console.log("All circles moved at thesame time");
  });
};
translateAllAtOnce();
