let productData=localStorage.getItem("products");
let container=document.querySelector(".container");
if(productData){
    productData=JSON.parse(productData);
    container.innerHTML="";
    productData.forEach(product => {
        console.log(product);
        let productId=product.productId;
        let name=product.name;
        let quantity=product.quantity;
        let category=product.category;
        let price=product.price;
    });
}

function createProduct(pId, n, c, q, p){
    let div=document.createElement("div");
    div.classList.add("productContainer");
    div.innerHTML=`<div class="productID">${pId}</div>
    <div class="Name">${n}</div>
    <div class="Quantity">${q}</div>
    <div class="Category">${c}</div>
    <div class="Price">${p}</div>`
    container.append(div);
}