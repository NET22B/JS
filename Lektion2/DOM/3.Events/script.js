const btn = document.querySelector('#btnAlert');
const form = document.querySelector('#loginForm');
const square =document.querySelector('#square');

document.querySelectorAll('p')
        .forEach(p => p.addEventListener('click', (e) => console.log('Working', e.target)))



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

 form['firstName'].addEventListener('focus', function(e){
    console.log('focus');
    this.classList.add('focus');
});

 form['firstName'].addEventListener('blur', function(e){
    console.log('blur');
    this.classList.add('blur');
});

square.addEventListener('mousemove', e => {
    // console.log(e);
    // console.log(e.offsetX, e.offsetY);
    square.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`;
})