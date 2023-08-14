let x=10;
let y=x;
y=15;
console.log(x);
console.log(y);

let arr=[1, 2, 3, 4];
let arr1=arr;
arr1[0]=10; //When non primitive data values are passed then they are passed through references.
console.log(arr);
console.log(arr1);
console.log({}={});

console.log(arr); //Rest Operator, it brings out the individual values of the array out of the array.
console.log(...arr);

let arr3=[...arr1];
console.log(arr3);

let arr4=[...arr, ...arr3];
console.log(arr4);

arr3[0]=100;
console.log(arr1);
console.log(arr3); //Using rest opertor you can copy array elements without passing them through reference.

arr3[0]=100;
// arr3[4][0]=5000;
console.log(arr1);
console.log(arr3);
let arr5=JSON.stringify(arr1);
console.log(arr5);
console.log(typeof arr5);
