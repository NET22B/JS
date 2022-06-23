const btn = document.querySelector('#btnAlert');
const form = document.querySelector('#loginForm');
const square =document.querySelector('#square');

 document.querySelectorAll('p')
         .forEach(p => p.addEventListener('click', (e) => console.log('Working', e.target)))

        // document.querySelectorAll('p')
        // .forEach(p => p.addEventListener('click', function(){
            
        //     console.log('Working', this)
        // }))


        //btn.addEventListener('click', function(e){
            //     alert('eventet triggades');
            // })
            
            // btn.addEventListener('dblclick', function(e){
            //     alert('eventet triggades');
            // })
            
            // btn.addEventListener('mousedown', function(e){
            //     alert('eventet triggades');
            // });
            
            // btn.addEventListener('mouseup', function(e){
            //     alert('eventet triggades')
            // });
            
            // btn.addEventListener('mouseenter', function(e){
            //     alert('eventet triggades')
            // });
            
            // btn.addEventListener('mouseleave', function(e){
            //     alert('eventet triggades')
            // });

//  form['firstName'].addEventListener('focus', function(e){
//     console.log('focus');
//     this.classList.add('focus');
// });

//  form['firstName'].addEventListener('blur', function(e){
//     console.log('blur');
//     this.classList.add('blur');
// });

//  form['firstName'].addEventListener('change', (e) =>{
//             console.log(e.target.value);
//  })


 form['firstName'].addEventListener('change', function(){
    console.log(this.value);
 })

// square.addEventListener('mousemove', e => {
//      console.log(e);
//     console.log(e.offsetX, e.offsetY);
//     square.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`;
// })


// form['lastName'].addEventListener('blur', function(e){
//     console.log(this);
//     // console.log('blur');
//     // this.classList.add('blur');
// });

form['lastName'].addEventListener('blur', (e) => {
    console.log(this);
    // console.log('blur');
    // this.classList.add('blur');
});


let output = document.querySelector('#output');
let btn2 = document.querySelector('#btn');
let counter = 1;

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log(e);
//    output.innerHTML = `<p>${e.target[0].value}</p>`
//    form.reset();
// });

// btn2.addEventListener('click', e => {
//     const p = document.createElement('p');
//     p.innerText = `Hej: ${counter++}`;
//     p.addEventListener('mouseleave', e => e.target.remove())
//     output.appendChild(p);
// })


btn2.addEventListener('click', e => {
   output.innerHTML += `   
   <div>
   <p>Hej: ${counter++}</p>
 </div>`
})

output.addEventListener('click', function(e){
    console.log(e.target);
    e.target.remove();
})

const obj  = {
    firstName: 'Kalle',
    test: 'Kalle',
    testFunc: function(){
        return this.firstName;
    },
    testFunc2: () => {
        return this;
    }
}

console.log(obj.testFunc2());
console.log(this);
