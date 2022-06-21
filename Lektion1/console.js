// en kommentar kan skrivas såhär om det är en rad  ( ctrl + ' )


/* 
  en kommentar kan skrivas såhär
  om det är flera rader
  ( shift + alt + a )
*/

// alert('Hej');

document.body.innerText = 'Banan';

console.log("Här skriver vi i konsolen");
console.warn('Warning')
console.error('error')

//Scope
let age = 34;    //Global scope
let age2 = 45;
const age3 = 66;

if(age2 === 45){
     age = 55;  //lokalt scope bara synlig här
     var firstName = 'Kalle'; //synligt även utanför
}

console.log(age, firstName);




