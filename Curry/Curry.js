// console.log(add(1)(2)(3)(4)(5)(6)());
// function  add(a, b, c, d, e, f){
//     return a+b+c+d+e+f;
// }
// function add(value){
//     if(typeof value=='undefined'){
//         return 0;
//     }
//     function inner(nextValue){
//         if(typeof nextValue=='undefined'){
//             return value;
//         }
//         value+=nextValue;
//         return inner;
//     }
//     return inner;
// }

function update(a, b, c){
    c=a+b;
}
let a=10;
b=20;
update(a, b, c);
console.log(c);
