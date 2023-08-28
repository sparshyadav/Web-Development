document.addEventListener('click', function () {
    console.log("I clicked on document");
});

let content=document.querySelector('h1');
content.addEventListener('click', function(){
    content.style.backgroundColor="red";
});

let h2Color=document.querySelectorAll('h2');
h2Color.addEventListener('click', function(){
    h2Color.style.backgroundColor="green";
    h2Color.style.color="orange";
})