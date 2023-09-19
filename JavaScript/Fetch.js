let url='https://jsonplaceholder.typicode.com/todos/1';
// fetch(url).then((data)=>{
//     return data.json();
// }).then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

async function fetching(){
    try{
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
    }
    catch(err){
        console.log(err);
    }
}
fetching();