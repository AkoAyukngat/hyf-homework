const users = ["STEP0HEN", "benna100", "fzscodes"];
const request = users.map((user) =>
  fetch(`https://api.github.com/search/repositories?q=user:${user}`)
);

Promise.all(request)
  .then((responses) => {
    for (let response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }

    return responses;
  })
  .then((responses) => Promise.all(responses.map((r) => r.json())))
  .then((users) => users.forEach((user) => {
    //const body = document.getElementsByTagName("body");
    const userOne = document.getElementById("user1");
    const liTag = document.createElement("li");
    liTag.innerHTML = `this is user One:${user.items[1]}`;
    userOne.appendChild(liTag);
    
  }));
  //console.log(user.items[1]);



