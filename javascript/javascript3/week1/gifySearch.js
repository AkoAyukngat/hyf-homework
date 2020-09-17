const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const result = document.getElementById("result");
const numberInput = document.getElementById("gif-number");

searchForm.addEventListener("click", function (e) {
  e.preventDefault();
  const searchWord = searchInput.value;
  giphySearch(searchWord);
});

const giphySearch = (searchWord) => {
  const number = numberInput.value;

  const apiKey = "Tq5NA56kH1mk8dW0DYlOqG5zlDZR91yT";
  //const q = "drinks";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchWord}&limit=${number}&offset=0&rating=G&lang=en`;

  fetch(url)
    .then((response) => response.json())
    .then((output) => {
      console.log(output.data[0].images.fixed_width.url);

      let resultHtml = "";

      output.data.forEach((obj) => {
        console.log(obj.images.fixed_width.url);

        const url = obj.images.fixed_width.url;
        const width = obj.images.fixed_width.width;
        const height = obj.images.fixed_width.height;
        const title = obj.title;

        resultHtml += `<img class='items' src="${url}" 
            width='${width}' 
            height='${height}'
            alt="${title}">`;
      });

      result.innerHTML = resultHtml;
    });
  
};
