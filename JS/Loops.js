// const arr=[10,2,3,4,5];
// for(num in arr){
//     console.log(num);
// }

// const greetings="Hello World!";
// for(greet of greetings){
//     // console.log(`Each char is ${greet}`);
//     console.log(greet);
// }

// const language={
//     js: "JavaScript",
//     cpp: "C++",
//     rb: "Ruby",
//     swift: "Swift by Apple"
// }

// for (const key in language) {
//     console.log(language[key, value]);
// }

const coding=["js", "ruby", "java", "C++", "python"];

coding.forEach(function(item){
    console.log(item);
})

coding.forEach((val)=>{
    console.log(`${val} `);
})