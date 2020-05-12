//Exercise One: Movies exercise

const movieApi =
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json";

fetch(movieApi)
  .then((res) => res.json())
  .then((result) => {
    //console.log(result)
    const badMoviesArray = result.filter((movie) => movie.rating < 5);
    console.log(badMoviesArray);
    const badMoviesSince2000 = badMoviesArray.filter(
      (movie) => movie.year >= 2000
    );
    console.log(badMoviesSince2000);
    // const badMoviesTitle = badMoviesArray.map(movie => movie.title)
    // console.log(badMoviesTitle)
  });

//Exercise Two: Promise that resolves after set time

const resolvesAfterFunction = (resolvesAfter) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`I am called asynchronously ${resolvesAfter} seconds after ☺`);
    }, resolvesAfter * 1000);
  });
};
resolvesAfterFunction(8).then((value) => console.log(value));

//use it with async/await:

async function asynAwait() {
  const value = await resolvesAfterFunction(4);
  console.log(`Async/Await:${value}`);
}
asynAwait();

//Exercise Three:Rewrite time

//timer
const setTimeoutPromise = (inputTime) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Called after ${inputTime} seconds`);
      resolve();
    }, inputTime * 1000);
  });
};
setTimeoutPromise(8);
// .then((outputData) => {
//     console.log(outputData);
// });

//Current Position:

const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(`Latitude: ${position.coords.latitude}`);
    console.log(`Longitude:${position.coords.longitude}`);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//Exercise Four:

//Promises and .then:
const url = "http://dummy.restapiexample.com/api/v1/employees";
const url2 = "http://dummy.restapiexample.com/api/v1/employees";
fetch(url)
  .then((response) => response.json())
  .then((output) => {
    setTimeout(() => {
      console.log(output.data);
    }, 3000);
  })
  .catch((err) => {
    console.log("ErrorMessage", err);
  });

//Async/await:

async function getData() {
  const response = await fetch(url2);
  const json = await response.json();
  const result = await json.data;
  setTimeout(() => {
    console.log("Async/Await:", result);
  }, 3000);
}
getData();
