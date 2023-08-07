// console.log(1+'1'); //11
// console.log(10-'1'); //9
// console.log(10+'A'-1); //NaN
// console.log(Number('10A')); //NaN
// console.log('ABC'-1); //NaN

// let a='10';
// console.log(typeof(a));
// console.log(typeof(parseInt(a)));

// console.log(1+ +'1'); //2
// console.log(10+ +'6'); //10
// console.log(10- +'6'); //4

// console.log(+[]); //0
// console.log(+''); //0
// console.log(+' '); //0
// console.log(+[[],[]].toString()); //NaN
// console.log([].toString);

// console.log(1==1); //true
// console.log(1=='1'); //true
// console.log(1==1.0); //true 
// console.log(0==[]); //true
// console.log(''==[]); //true
// console.log(''==0); //true
// console.log(''==' '); //true
// console.log(' '==[]); //false

let z=[1,2,3,4];
let y=[1,2,3,4];
console.log(z==y); //false
z=y;
console.log(z==y); //true
