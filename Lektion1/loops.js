const namesArray = ['Joakim', 'Jeanette', 'Jack', 'Colin', 'Vince', 'Liam', 'Wille'];

const usersArray = [
  {id: '1', name: 'Jo123akim', email: 'joakim@mail.com', age: 34, status: true},
  {id: '2', name: 'Jeane123tte', email: 'jeanette@mail.com', age: 33, status: false},
  {id: '3', name: 'Ja123ck', email: 'jack@mail.com', age: 5, status: false},
  {id: '4', name: 'Co123lin', email: 'colin@mail.com', age: 3, status: false},
  {id: '5', name: 'Vi123nce', email: 'vince@mail.com', age: 1, status: false},
  {id: '6', name: 'L123im', email: 'liam@mail.com', age: 15, status: true},
  {id: '7', name: 'Wi123lle', email: 'wille@mail.com', age: 9, status: false}
]

// FOR LOOPAR

// Loopa ett givet antal gånger
for (let i = 0; i < 5; i++) {
    // console.log(i);
    console.log(i, namesArray[i]);
  }

  console.log('---------------------');

  // Loopa igenom en hel array med en FOR
  console.log(namesArray.length);
  for(let i = 0; i < namesArray.length ; i++) {
      console.log(namesArray[i]);
  }
  
  console.log('---------------------');

  // FOR OF - loopar igenom allt i en given array som en ForEach i C#
for(let name of namesArray) {
    console.log(name);
}

console.log('---------------------');

for(let user of usersArray) {
    console.log(user);
    console.log(user.name);
}

console.log('---------------------');


//FOR IN Loopar på medlemmarna i objektet
for(let prop in usersArray[0]){
  console.log(prop, usersArray[0][prop]);
}

//while, do while precis som i c#

// do {
//   console.log('do while: ' + i);
//   i++; // kom ihåg att inkrementera i! annars blir det en oändlig loop
// } while(i < 7);


let totalAge = usersArray.map(u => u.age).reduce( (total, age) => total + age);
console.log(totalAge);