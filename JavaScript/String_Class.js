let firstName='Sparsh';
let lastName=new String('Yadav');

console.log(typeof firstName); //This is a string type string.
console.log(typeof lastName); //This is of object type string.

console.log(firstName.length); //Using dot(.) notation we used object properties for string primitive data type.

console.log(lastName[0]);
console.log(firstName.includes('ar'));
console.log(lastName.startsWith('Yad'));
console.log(firstName.endsWith('rsh'));
console.log(lastName.indexOf('d'));
console.log(firstName.toLocaleUpperCase());
console.log(lastName.toLocaleLowerCase());

firstName=' Sparsh '; //Includes Space
console.log(firstName);
console.log(firstName.trim()); //It removes Space from the staart and end.
