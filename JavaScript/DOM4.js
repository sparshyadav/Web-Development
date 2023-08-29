const t1=performance.now();
let myDiv=document.createElement('div');
for(let i=0; i<100; i++){
    let element=document.createElement('p');
    element.textContent="This is para "+i;
    myDiv.appendChild(element);
}
document.body.appendChild(myDiv);
// myParentElement.append(myDiv);
const t2=performance.now();
console.log(`Time taken to append 100 divs: ${t2-t1}`);