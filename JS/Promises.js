// const promise=new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is complete");
//     }, 1000)
// });

// promise.then(function(){
//     console.log("Promise Consumed");
// })

// var ans=new Promise((resolve, reject)=>{
//     if(false){
//         return resolve();
//     }
//     else{
//         return reject();
//     }
// })

// ans.then(function(){
//     console.log("Resolve Hogya Hai");
// }).catch(function(){
//     console.log("Reject Hogya Hai");
// })

// let num;
// var ans=new Promise((resolve, reject)=>{
//     num=Math.floor(Math.random()*10);
//     if(num>5){
//         return resolve();
//     }
//     else{
//         return reject();
//     }
// })

// ans.then(function(){
//     console.log("Num is Greater than 5");
// }).catch(function(){
//     console.log("Num is lesser than 5");
// })


// Pizza
// var promise1=new Promise((resolve, reject)=>{
//     return resolve("Pizza Ka Base Banao");
// })

// promise2=promise1.then(function(data){
//     console.log(data);
//     return new Promise((resolve, reject)=>{
//         return resolve("Pizza pr Sauce Lagao");
//     })
// })

// promise3=promise2.then(function(data){
//     console.log(data);
//     return new Promise((resolve, reject)=>{
//         return resolve("Toppings Lagao");
//     })
// })

// promise4=promise3.then(function(data){
//     console.log(data);
//     return new Promise((resolve, reject)=>{
//         return resolve("Bake in Oven");
//     })
// })

// promise4.then(function(data){
//     console.log(data);
//     console.log("Pizza Taiyaar");
// })

const promise=new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username: "JavaScript", password: "12345"});
        }
        else{
            reject("ERROR: An Error Occured");
        }
    }, 1000)
})

async function promiseConsume(){
    try{
        const response=await promise
        console.log(response);
    }
    catch{
        console.log("Error");
    }
}

promiseConsume();