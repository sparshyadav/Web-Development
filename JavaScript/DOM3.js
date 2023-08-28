// document.addEventListener('click', function () {
//     console.log("I clicked on document");
// });

let content=document.querySelector('h1');
content.addEventListener('click', function(){
    content.style.backgroundColor="red";
});

let h2Color=document.querySelector('h2');
h2Color.addEventListener('click', function(){
    h2Color.style.backgroundColor="green";
    h2Color.style.color="orange";
});

function eventFunction(){
    console.log("I have clicked on the document");
}
p.addEventListener('click', eventFunction);
p.removeEventListener('click', eventFunction);

let link=document.querySelector('a');
link.addEventListener('click', function(event){
    event.preventDefault();
    console.log(`The href is ${this.href}`);
});