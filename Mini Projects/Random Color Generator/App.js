const getColor=()=>{
    const randomNumber=Math.floor(Math.random()*16777215); //First we create a randon number, and multiply it with 16777215 so that it become a bigger number, as Math.randon only generates a number between 0 and 1.
    const randomCode="#"+randomNumber.toString(16); // Then, we create a hex code of that number be concating it wait a '#' pound sign and then typecasting the randomNumber to a hexadecimal Numeber, thus forming our hex code for the color.
    document.body.style.backgroundColor=randomCode; // Now, we apply the color code to the background color of the body.
    document.getElementById("colorCode").innerText=randomCode; // We also change the color code on the colorCode div of our page.

    navigator.clipboard.writeText(randomCode); // With every random color the code automatically gets copied to the clipboard.
}

document.getElementById("btn").addEventListener("click", getColor); // We add an EventListener to the button that changes the body color with every click, change the colorCode, and also copies the colorCode.
getColor(); // We add this function call as an initial call, so that there is a random color at the start refresh of the webpage, if we remove this function call, the web page will be white before the first click.