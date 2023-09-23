function chopping(Vegetables, quality){
    return new Promise(function (resolve, reject){
        if(quality<50){
            return reject(Vegetables+" Kharab Hai");
        }
        setTimeout(() => {
            let choppingVegies="Chopped "+Vegetables;
            resolve(choppingVegies);
        }, 2000);
    })
}

function cooking(choppedVegies){
    return new Promise(function (resolve, reject){
        if(true){
            return reject("Sabzi nhi Banege");
        }
        setTimeout(() => {
            resolve("Khana Ban Gaya");
        }, 2000);
    })
}

chopping("potato", 45).then((data)=>{
    console.log("First Then");
    console.log(data);
    return cooking(data);
}).then((data)=>{
    console.log("Second Then");
    console.log(data);
}).catch((err)=>{
    console.log(err);
})

async function myTask() {
    let data=await chopping("potato", 75);
    console.log(data);
    let data2=await cooking(data);
    console.log(data2);
}
myTask();