// let numbers=[1,4,5,8];
// console.log(numbers);

// numbers.push(19);
// console.log(numbes);

// numbers.unshift(0);
// console.log(numbers);

// numbers.splice(4, 5, 5, 5, 5);
// console.log(numbers);

//Functions
run(); //Hoisting
function run(){
    console.log('Running');
}
run();

let stand=function walk(){ //This is normal function assignment as it has a function name i.e. walk.
    console.log('Walking');
}
stand();

let jump=function(){ //This is function assignment anonymus as it does not have a function name.
    console.log('Jumping');
}
jump();
let jumpp=jump;
jumpp();
