// const mySymbol=Symbol("Key1");
// const user = {
//     name: "Sparsh",
//     age: 18,
//     location: "Meerut",
//     "Full Name": "Sparsh Yadav",
//     [mySymbol]: "Key1"
// }
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["Full Name"]); //There is now way to accces a member like Full Name using dot notation, it can only be accessed using square brackets[]. Thus, square brackets become more useful to use rather than dot notation;
// console.log(user[mySymbol]);

// Object.freeze("name");
// user["name"]="Sparsh Yadav";
// console.log(user["name"]);

// console.log(Object.keys(user)); //Displays all the keys in form of an array.
// console.log(Object.values(user)); //Displays all the values in the form of an array.


// const course={
//     courseName: "JavaScript",
//     price: "999",
//     courseLang: "Hindi"
// }

// console.log(course.courseName);

// const{courseName}=course;
// console.log(courseName);           //All These 3 methords are used to acces object values, the last two methods are known as destructuring, i.e. giving some other or short name to the key, so that it becomes easier to use.

// const{courseName: name}=course;
// console.log(name);
 

// JSON is an object with no name, and has key as a string, whenever we will fetch data from any API, we will get that data in JSON format.