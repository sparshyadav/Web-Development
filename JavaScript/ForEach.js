let arr=[1,2,3,4,5];
arr.forEach(myfun);
function myfun(value, idx, arr){
    console.log(value);
}

arr.forEach(function(value, idx, arr){
    console.log(value);
})

arr.forEach((value)=>{
    console.log(value);
})

let sum=0;
arr.forEach((value)=>{
    sum+=value;
})
console.log(sum);