// console.log("Let's get this party started.");
// let rectangle={
//     length: 1,
//     breadth: 2,
//     draw: function(){
//         console.log("Drawing Rectangle");
//     }
// }

//Factory Function
// function createRectangle(length, breadth){
//     return rectangle={
//         length: length,
//         breadth: breadth,
//         draw(){
//             console.log("Drawing a Rectangle");
//         }
//     };
// }
// let rect1=createRectangle(2, 3);
// let rect2=createRectangle(4, 5);
// let rect3=createRectangle(6, 7);

//Constructor Function
// function Rectangle(len, bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log("Drawing a Rectangle");
//     }
// }
// let rect1=new Rectangle(4, 5);
// rect1.color="Yellow";
// console.log(rect1); 
// delete rect1.color;
// console.log(rect1);
// console.log(rect1.constructor);
// console.log(Rectangle.constructor); 

//Primitive's are copied by their values, and references are copied by their addresses.

//for-in loop
// let rectangle = {
//     length: 2,
//     breadth: 3
// };
// for (let key in rectangle) {
//     console.log(key); //it displays only the objects
//     console.log(rectangle[key]); //it displays the object values
//     console.log(key, rectangle[key]); //it displays both the object, and the object values
// }

// if ('color' in rectangle) {
//     console.log("Present");
// }
// else {
//     console.log("Absent");
// }

// if ('length' in rectangle) {
//     console.log("Present");
// }
// else {
//     console.log("Absent");
// }

//for of loop can only be used on iterables i.e. arrays and maps etc. 

//Cloning of objects using for in loop.
// let src={
//     a:10, 
//     b:20,
//     c:30
// };
// let dest={};
// for(let key in src){
//     dest[key]=src[key];
// }
// console.log(src);
// console.log(dest);

// Cloning of objects using assign operator
// let src={
//     a:10, 
//     b:20,
//     c:30
// };
// let dest=Object.assign({}, src);
// console.log(src);
// console.log(dest);

//Another Method of cloning 
let src={
    a:10, 
    b:20,
    c:30
};
let dest={...src};
console.log(src);
console.log(dest);

