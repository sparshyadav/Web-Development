// function calCartPrice(...num){
//     return num;
// }
// console.log(calCartPrice(1, 2, 3, 4, 5, 6));

// const user={
//     username: "Sparsh",
//     price: 1999
// }

// function handleObject(anyObject) {
//     console.log(`The UserName is: ${anyObject.username} and the price of object is: ${anyObject.price}`);
// }
// handleObject(user);
// handleObject({
//     username: "Yadav",
//     price: 999
// });

// const addOne=function(num){ //This method of declaring a function using a variable is known as function expression.
//     return ++num;
// }
// console.log(addOne(5));


// +++++++++ Arrow Functions ++++++++++
const addTwo=(num1, num2)=>{
    return num1+num2;
}
console.log(addTwo(3,5));


// ++++++++++ Immediately Invoked Function Expressions (IIFE) ++++++++++
(function chai(){  // This is named IIFE as it has a name-> chai
    console.log("DB Connected");
})();

(()=>{
    console.log("DB Connected Two");
})();

((name)=>{
    console.log(`DB Connected by ${name}`);
})('Sparsh');
