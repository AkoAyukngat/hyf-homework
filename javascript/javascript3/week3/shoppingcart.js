const productUl = document.getElementById("prods");
const totalPrice = document.getElementById("t-priz");
const username = document.getElementById("user");
const productPrice = document.getElementById("p-priz");

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrencyWithApi(currency) {
    const url = `https://api.exchangeratesapi.io/latest?base=DKK`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => {
        return this.price * data.rates[currency];
      })
      .catch((err) => console.log(err));
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const newProducts = this.products.filter((existingProduct) => {
      return existingProduct.name !== product.name;
    });
    this.products = newProducts;
  }

  searchProduct(productName) {
    const searchedProduct = this.products.filter(
      (product) => product.name.toLowerCase() === productName.toLowerCase()
    );
    return searchedProduct;
  }

  renderProducts() {
    this.products.forEach((product) => {
      const li = document.createElement("li");
      const liPrice = document.createElement("li");
      li.innerHTML = `${product.name}`;
      liPrice.innerHTML = `${product.price}`;
      productUl.appendChild(li);
      productPrice.appendChild(liPrice);
    });
    return prods;
  }

  getTotal() {
    const totalAmount = this.products
      .map((product) => product.price)
      .reduce((acc, currentvalue) => acc + currentvalue);
    totalPrice.textContent = `The total amount is: ${totalAmount} kr`;
    //console.log(totalAmount);
  }

  getUser() {
    const url = "https://jsonplaceholder.typicode.com/users/1";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        const user = result.username;
        username.textContent = `Username : ${user}`;
      });
  }
}

const shoppingCart = new ShoppingCart();
const Iron = new Product("Ironing-table", 1000);
const mobile = new Product("Mobile-phone", 2000);
const oven = new Product("Oven", 4000);
const Freezer = new Product("Freezer", 3000);
const headphones = new Product("Jabra", 2500);
const speakers = new Product("Loud-speaker", 3000);

shoppingCart.addProduct(Iron);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(oven);
shoppingCart.addProduct(Freezer);
shoppingCart.addProduct(headphones);
shoppingCart.addProduct(speakers);

shoppingCart.removeProduct(Iron);
//console.log(shoppingCart);

//console.log(shoppingCart.searchProduct("Freezer"));

shoppingCart.getUser();
const finalCart = shoppingCart.renderProducts();

shoppingCart.getTotal();
const plant = new Product("plant", 50);
shoppingCart.addProduct(plant);
plant.convertToCurrencyWithApi("DKK").then((value) => console.log(value));
