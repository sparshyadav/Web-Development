function starter(cb){
    console.log("Starter Coming");
    setTimeout(() => {
        console.log("Starters Eaten");
        cb(mainCourse) //drinks(maincourse);
    }, 3000);
}

function drinks(cb){
    console.log("Drinks Coming");
    setTimeout(() => {
        console.log("Drinks drunken");
        cb(dessert);
    }, 1000);
}

function mainCourse(cb){
    console.log("Main Course Coming");
    setTimeout(() => {
        console.log("Main Course Eaten");
        cb(bill);
    }, 5000);
}

function dessert(cb){
    console.log("dessert Coming");
    setTimeout(() => {
        console.log("dessert Eaten");
        cb();
    }, 2000);
}

function bill(){
    console.log("Bill Coming");
    setTimeout(() => {
        console.log("Bill Paid");
        console.log("- By Shreya");
        
    }, 1000);
}

starter(drinks);