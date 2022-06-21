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


