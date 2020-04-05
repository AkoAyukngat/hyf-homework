"use strict";

//#1 Item array removal

const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
  if (names[i].includes(nameToRemove)) {
    names.splice(i, 1);
  }
}
console.log(names);

//#2 When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function timeTravel(destinationDistance, speed) {
  return 432 / 50;
}
const travelTime = timeTravel(travelInformation);
console.log(travelTime);

const distanceInHours = 8;
const distanceInMins = Math.floor(0.64 * 60);
console.log(`${distanceInHours} hours and ${distanceInMins} minutes`);

//3 Series duration of my life.

const seriesDurations = [
  {
    title: "Power",
    days: 2,
    hours: 15,
    minutes: 0,
  },
  {
    title: "Queen Sono",
    days: 2,
    hours: 19,
    minutes: 30,
  },
  {
    title: "The Walking Dead",
    days: 9,
    hours: 3,
    minutes: 51,
  },
];

function seriesDurationOfLifespan(durationOfSeries) {
  let totalTimeSpent = 0;

  for (let i = 0; i < durationOfSeries.length; i++) {
    let hoursToDay = durationOfSeries[i].hours / 24; //Converting hours to days by dividing by 24
    let day = (hoursToDay + durationOfSeries[i].days) / 365 / 80;
    let timePercentage = day * 100;

    totalTimeSpent += timePercentage;

    console.log(
      `${durationOfSeries[i].title} took ${timePercentage.toFixed(
        2
      )} % of my life`
    );
  }
  console.log(`In total that is ${totalTimeSpent.toFixed(2)} % of my life`);
  return durationOfSeries;
}

const totalLifeSpan = seriesDurationOfLifespan(seriesDurations);
//console.log(totalLifeSpan);

//#4 My favorite songs

const songDatabase = [
  {
    songId: 1,
    title: "My baby",
    artist: "Soggy socks",
  },
  {
    songId: 2,
    title: "3 nails in wood",
    artist: "The carpenters",
  },
  {
    songId: 3,
    title: "Blacker than black",
    artist: "Instant coffee",
  },
  {
    songId: 4,
    title: "When is enough too little?",
    artist: "The spies girls",
  },
];

const myPlaylist = [];

//Add song to database

let favSong1 = { songId: 5, title: "Shekere", artist: "Yemi Alade" };
let favSong2 = { songId: 6, title: "ca bouge pas", artist: "Fally Ipupa" };
let favSong3 = { songId: 7, title: "50 Naira", artist: "Sugar Boy" };

function addSongToDatabase(song) {
  songDatabase.push(song);
  return songDatabase;
}
addSongToDatabase(favSong1);
addSongToDatabase(favSong2);
addSongToDatabase(favSong3);
console.log(songDatabase);

//Searching for a song

const searchSong = [];
function getSongByTitle(title) {
  for (let i = 0; i < songDatabase.length; i++) {
    if (title !== songDatabase[i].title) {
    }
    if (title === songDatabase[i].title) {
      searchSong.push(songDatabase[i]);
    }
  }
  console.log ("song not in database");
}

getSongByTitle("Shekere");
getSongByTitle("ca bouge pas");
getSongByTitle("50 Naira");
getSongByTitle("Wait");
console.log(searchSong);

//Create our own playlist
function addSongToMyPlaylist(title) {
  //let myPlaylist = [];
  for (let i = 0; i < searchSong.length; i++) {
    if (title === searchSong[i].title) {
      myPlaylist.push(searchSong[i]);
    }
  }
  return myPlaylist;
}
addSongToMyPlaylist("Shekere");
console.log(myPlaylist);

//#Step-3 NOnoNOnoYes (note taking app)

const notes = [];
function addnote(content, id) {
  notes.push({ content, id });
}
addnote("Page", 11);
addnote("Page", 4);
console.log(notes);
// Getting a note
function getNoteFromId(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i];
    } else if (id !== Number && !id) {
      return "Error, id should begin as number and not  as an empty field";
    } else {
      return "oh no! wrong page";
    }
  }
}
console.log(getNoteFromId(11));
//getting all notes
console.log(notes);
// Logging out notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      `The note with id ${notes[i].id} has the following content ${notes[i].content}`
    );
  }
}
logOutNotesFormatted();
