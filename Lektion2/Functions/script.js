

const calc = function(num1, num2){
    let sum = num1 + num2;
    return sum;
}

//Kan accessas innan den har deklarats
function calc2(num1, num2){
    // if(typeof num1 == 'number')
    let sum = +num1 + +num2;
    return sum;
}

let res = calc2(2, 2);
console.log(res);


//Arraw functions
const calc3 = (num1, num2) => num1 + num2;


const calc4 = (num1, num2) => {
   let sum =  num1 + num2;
   return sum;
}


const argumentfunc =  function(){
    const first = arguments[0];
    console.log('first: ', first);
    const arr = Array.from(arguments);
    arr.forEach(x => console.log(x));
}

argumentfunc(1,2,3,4,[],6,7,{});

const test = function(summa){
    console.log('Sum', summa);
}

const callbackfunc = (nr1, nr2, cb) => {
        let sum = nr1 + nr2;
        setTimeout(() => {
            cb(sum);
        },2000);
}

callbackfunc(2,3, (summa) => console.log('Sum: ' , summa));
callbackfunc(2,3, test);
// callbackfunc(2,3,4);

// aaaa = {
//     firstName: 'Kalle'
// }

// console.log(window.aaaa);
// console.log(window);

//Scope
( (aaaa) => {

    aaaa.testFunc = (num) => num

})(window.aaaa = window.aaaa || {});

console.log(window.aaaa);

console.log(aaaa.testFunc(3));

console.log(window);


