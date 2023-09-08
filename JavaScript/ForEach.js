let arr=[1,2,3,4,5, 65];

let mul=arr.map((val, idx, arr)=>{
    return val*2;
})
console.log(arr);
console.log(mul);

let even=arr.map((val, idx, arr)=>{
    if(val%2==0){
        console.log(val);
    }
})


// arr.forEach(myfun);
// function myfun(value, idx, arr){
//     console.log(value);
// }

// arr.forEach(function(value, idx, arr){
//     console.log(value);
// })

// arr.forEach((value)=>{
//     console.log(value);
// })

// let sum=0;
// arr.forEach((value)=>{
//     sum+=value;
// })
// console.log(sum);

