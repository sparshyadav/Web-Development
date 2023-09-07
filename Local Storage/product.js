// let myForm=document.querySelector(".myform");2
let productNameq5
myForm.addEventListener("submit", function(ev){
    ev.preventDefalut();
    console.log(ev);
    console.log(productNmae.value, productQuantity.value, productPrice,)
});
744\let products = [];0
function displayProducts() {
  let products = JSON.parse(localStorage.getItem("products"));
  let view = document.querySelector(".view");
  view.innerHTML = "";

  if (products.length === 0) {
    view.innerHTML = `<tr><td colspan="4">No products found</td></tr>`;
    return;
  }
  products.forEach((product) => {
    view.innerHTML += `
      <tr class="product">
        <td>${product.name}</td>
        <td>${product.quantity}</td>
        <td>${product.price}</td>
        <td><button class="delete" onclick="deleteProduct(${product.id})">Delete</button></td>
      </tr>
    `;
  });
}

// delete
function deleteProduct(id) {
  let products = JSON.parse(localStorage.getItem("products"));
  let newProducts = products.filter((product) => product.id !== id);
  localStorage.setItem("products", JSON.stringify(newProducts));
  displayProducts();
}

// set
function setProducts(newProduct) {
  const getItem = localStorage.getItem("products");
  if (getItem) {
    products = JSON.parse(getItem);
  }
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));
}

function addProduct() {
  let name = document.querySelector("#name").value;
  let quantity = document.querySelector("#quantity").value;
  let price = document.querySelector("#price").value;

  if (name === "" || quantity === "" || price === "") {
    alert("Please fill all the fields");
    return;
  }

  let newProduct = {
    id: Math.floor(Math.random() * 100000),
    name: name,
    quantity: quantity,
    price: price,
  };
  setProducts(newProduct);
  document.querySelector("#name").value = "";
  document.querySelector("#quantity").value = "";
  document.querySelector("#price").value = "";
  displayProducts();
}

const myForm = document.querySelector("#myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addProduct();
});

window.addEventListener("load", displayProducts);
