// function add(a=10, b=20){
//     return a+b;
// }
// console.log(add(a, 30));

// var a=10;
// function foo(){
//     console.log(a); 
//     var a=20;
//     function foo1(){
//         a++;
//         console.log(a);
//         var a=30;
//         console.log(a);
//     }
//        foo1();
// }
// foo();

// var a=25;
// function display(){
//     console.log(a);
// }
// display();

//Higher Order Function
// function outerfun(fun){
//     console.log(fun);
//     console.log("Inside Outer Function"+fun());
// }
// function anotherFun(){
//     console.log('Inside Another Fun');
// }
// outerfun(anotherFun);
// outerfun(""+anotherFun);
// outerfun(anotherFun.toString())