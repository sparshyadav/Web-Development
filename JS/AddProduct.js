let productId=document.querySelector("#productID");
let name=document.querySelector("#Name");
let category=document.querySelector("#Category");
let quantity=document.querySelector("#Quantity");
let price=document.querySelector("#Price");
let form=document.querySelector(">productForm");
console.log(productId, name, category, quantity, price, form);

form.addEventListener("submit", function(ev){
    ev.preventDefault();
    let productData=localStorage.getItem("products") || [];
    if(productData.length>0){
        productData=JSON.parse(productData);
    }
    let newProduct={productId:productId.value, name:name.value, category:category.value, quantity:quantity.value, price:price.value};
    productData.push(newProduct);
    localStorage.setItem("products", JSON.stringify());
    form.reset();
})