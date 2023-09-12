function calCartPrice(...num){
    return num;
}
console.log(calCartPrice(1, 2, 3, 4, 5, 6));

const user={
    username: "Sparsh",
    price: 1999
}

function handleObject(anyObject) {
    console.log(`The UserName is: ${anyObject.username} and the price of object is: ${anyObject.price}`);
}
handleObject(user);
handleObject({
    username: "Yadav",
    price: 999
});