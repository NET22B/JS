// console.log(window);
// console.log(document);
// console.log(document.body);
// console.log(document.body.children);

//Returnerar Html collection
let p1 = document.getElementsByTagName('p');
// p1.forEach(p => console.log(p)) fungerar ej!!!!
console.log(p1);

let p2 = document.getElementsByClassName('paragraph');
console.log(p2);

let p3 = document.getElementById('para');
console.log(p3);

//Query selector
let q1 = document.querySelector('p');
console.log(q1);

let q2 = document.querySelector('.paragraph');
console.log(q2);

let q3 = document.querySelector('#para');
console.log(q3);


let q4 = document.querySelectorAll('p').forEach(p => console.log(p))


let q5 = document.querySelector('div.paragraph');
console.log(q5.innerHTML);

let q6 = document.querySelector('#list > li:nth-child(3)');
console.log(q6);


console.log(list.parentNode);
console.log(list.childNodes);
console.log(list.children);
console.log(list.children[0]);
console.log(list.nextSibling);
console.log(list.nextElementSibling);
console.log(list.previousSibling);
console.log(list.previousElementSibling);