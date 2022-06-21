/* 
    OBJECT - innehåller ett eller flera värden
    var person = {}
    let person = {}
    const person = {}


    används i klasser, objekt, json
    använder sig av key:value pairs
    alla värden är separerade av ett ,
*/

/* //JS objekt
let person = {
    firstName : 'Kalle',
    lastName : 'Anka',
    aqe : 50
}

//Json object
let json = {
    "firstName" : "Kalle",
    "lastName" : "Anka",
    "age" : 34
}

person = {}; //Aja baja
person.firstName = 'Nisse'
person.agee = 54;
person = 54;
console.log(person); */

// let person = {
//     firstName : 'Kalle',
//     lastName : 'Anka',
//     aqe : 50
// }

// let json = JSON.stringify(person);
// console.log(json);

// let js = JSON.parse(json);
// console.log(js);

const user = {
    firstName: 'Kalle',
    lastName: 'Anka',
    age: 34,
    address: {
      street: 'en gata',
      nr: 12,
      zipCode: 72345,
      city: 'Ankeborg'
    },
    phoneNumbers: ['076-1234567', '070-9876543'],
    isActive: true
  }

  console.log(user);
  user.firstName = 'Nisse';
  user.address.city = 'Gåseborg'

  console.log(user);

  const key = 'age';
  console.log(user[key]);
  
  //dekonstruktor (C# records)
//   let {firstName, age} = user;
//   console.log(firstName, age);

  let {firstName, age, address:{city}} = user;

  console.log(firstName, age, city);



