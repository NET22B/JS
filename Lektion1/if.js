let number = 13;
let string = '14';
// string = {};

// console.log(number == 13);
// console.log(number == 20);
// console.log(number != 13);
// console.log(number != 20);

//två == jämför enbart värdet
console.log(number == string);

//tre === jämför både värde och datatyp
console.log(number === string);

let res = number + +string;
console.log(res);

/*

        &&      och
        ||      eller
        !       inte
        <       mindre än
        >       större än
        <=      mindre eller lika med
        >=      större eller lika med

        !==    om det inte är lika med och inte har samma datatyp 
        !=     om det inte är lika med

*/

//Ternary
//condition ? expression : expression

let result = number < +string ? 1 : {name: 'Kalle'};
console.log(result);

const car = {
    color: 'red',
    brand: 'Volvo'
}

switch(car.color){
    case 'red':
        console.log('color is red');
        break;

    default:
        console.log('default');
}