"use strict";
console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const testProductNames = ["Flat Screen", "Mobile Phone", "Wallet"];

function renderProducts(products) {
  const ulTag = document.querySelector("section.products > ul");
  for (let i = 0; i < products.length; i++) {
    const currentProducts = products[i];
    const liTag = document.createElement("li");
    liTag.innerHTML = `${currentProducts.name}`;
    ulTag.appendChild(liTag);

    const liTag2 = document.createElement("li");
    liTag2.innerHTML = `${currentProducts.price}`;
    ulTag.appendChild(liTag2);

    const liTag3 = document.createElement("li");
    liTag3.innerHTML = `${currentProducts.rating}`;
    ulTag.appendChild(liTag3);

    const liTag4 = document.createElement("li");
    liTag4.innerHTML = `[${currentProducts.shipsTo}]`;
    ulTag.appendChild(liTag4);
  }
}
renderProducts(products);

//week 3 HW:
// #Filter products:

const searchItem = document.querySelector("div.search > input");
searchItem.addEventListener("keyup", filterInput);
function filterInput() {
  const inputText = searchItem.value;
  const filterProducts = products.filter(product =>
    product.name.toLowerCase().includes(inputText)
  );
  renderProducts(filterProducts);
  console.log(renderProducts(filterProducts));
}
