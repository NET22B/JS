/* 
    Javascript Datatyper
    --------------------------------------------------
    String        =   Text
    Number        =   Tal, decimaltal, stora tal
    Boolean       =   Sant / Falskt   true/false
    null          =   Tomt, ingenting alls (manuellt)
    undefined     =   Tomt, har ej blivit definierad än (automatiskt)
    Object        =   ett object/klass som innehåller ett eller flera värden
    Array         =   OBJECT (lista med ett eller flera värden)
    Symbol        =   symboler används med objekt, kommer vi inte att använda
*/

// var = global variabel - accessbar överallt i koden
// let = lokal variabel - accessbar bara inom det angivna området
// const = lokal konstant variabel - kan inte skrivas över (undantag finns)

let firstName = 'Kalle';
let name2 = "Kalle"; //Använd ej
let text = `Här kan vi skriva en text ${firstName}`; 
let text2 = 'Här kan vi skriva en text ' + firstName;


firstName = 5;
firstName = [];
firstName = {};
firstName = 'Nisse';



console.log(firstName);
console.log(firstName.length);
console.log(firstName[0]);
console.log(firstName.toUpperCase());

let fullName = 'Kalle Anka';
// console.log(fullName);
// console.log(fullName.length); // Kollar längden på en string
// console.log(fullName[0]);     // skriver ut värdet på en specifik plats
// console.log(fullName[2]);
// console.log(fullName.indexOf('a')); // Hittar Index platsen på det första värdet som matchas
// console.log(fullName.lastIndexOf('a')) // Index på det sista förekommande värdet

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// console.log(fullName.split(' '))    // Delar en string på det angivna värdet

// console.log(fullName.trim())  // tar bort whitespace före och efter en string


// Numbers
// ------------------------
/* 
    Math operators

    +   lägg till
    -   ta bort
    *   gångra
    **  upphöjt i
    /   dela
    %   division remainder - modulus

    ++  öka med 1
    --  minska med 1

    =   lika med
    +=  lägg till
    -=  ta bort
    *=  gångra och lägg till
    /=  dela och lägg til
    %=  division remainder

*/

let dataType;

console.log(typeof datatype);
datatype = 'en text';
console.log(typeof datatype);
datatype = 3;
console.log(typeof datatype);
datatype = null;
console.log(typeof datatype);   // det här är en bugg i javascript
datatype = true;
console.log(typeof datatype);
datatype = {};
console.log(typeof datatype);
datatype = [];
console.log(typeof datatype);