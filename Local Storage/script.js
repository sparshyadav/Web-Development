let product=[
    {
        pname: "mobile",
        pquant: 20,
        pprice: 30000
    },
    {
        pname: "laptop",
        pquant: 30,
        pprice: 60000
    }
];
// add
let productsJson=JSON.stringify(products);
localStorage.setItem("products", products);

//add
let productfromlocal=localStorage.getItem("products");
let productObject=Json.parse(productfromlocal);
console.log(productObject[0]);
