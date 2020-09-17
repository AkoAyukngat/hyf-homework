//#1 Create your own json file:
const myIdentity = {
  Ethnicity: "African",
  Nationality: "Southern Cameroonian",
  Tribe: "Ejagham",
  Sex: "Male",
  Age: 60,
  Name: { Firstname: "John", Middlename: "Ako Ayukngat", Lastname: "Ojong" },
  Hobby: ["Grilling", "Beef Butchery", "Reading", "Fitness"],
};
console.log(JSON.stringify(myIdentity));

const myIdentityParse = JSON.stringify(myIdentity);
console.log(JSON.parse(myIdentityParse));

//#2 Find a cool api:

fetch("https://www.breakingbadapi.com/api/")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);

    const getDeathApi = data.deaths;
    console.log(getDeathApi);
  });

fetch("https://breakingbadapi.com/api/deaths")
  .then((response) => response.json())
  .then((deathInstances) => {
    console.log(deathInstances);
  });

/*-This Api is an object with other Api's as values to the keys of the Object
   - To access each key means we have to fetch the Api as the previous.
   - It contains the Characters, Quotes, episodes & deaths of the famous series
      Breaking Bad */
