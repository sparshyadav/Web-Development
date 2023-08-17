const myHello=document.querySelector('h1');
console.log(myHello.innerHTML);
myHello.innerHTML="<h1>Hello World!</h1>";

const para=document.querySelector('p');
console.log(para.innerHTML);
para.innerText='All I do is win win win';

myHello.style.color='blue';
myHello.style.fontSize='50px';

para.style.backgroundColor='lightgreen';
