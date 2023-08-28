let h3=document.querySelector("h3");
// console.log(h3);
console.dir(h3);
let parent=h3.parentElement;
console.log(parent);

let h1=document.querySelector("h1");
console.log(h1);
let par=h1.parentElement;
let par2=par.parentElement;
console.log(par2);

let prevsb=h1.previousElementSibling;
console.log(prevsb);

let nextsb=h1.nextElementSibling;
console.log(nextsb);

let next=par.nextElementSibling;
console.log(next);

let ul=document.querySelector("ul");
let str=ul.innerHTML;
console.log(str);
str+="<li>AI</li>";

function clickEvent(){
    console.log("click!!");
}

function addElement(value){
    let li=document.createElement("li");
    console.log(li);
    li.classList.add("listItem");
    li.innerText=`${value}`;
    ul.append(li);
};

let mother=document.querySelector(".mother");
grandFather.addEventListener("click" , function(){
    console.log("father");
    eval.stopPropagation();
});
mother.addEventListener("click", function(){
    console.log("mother");
})



