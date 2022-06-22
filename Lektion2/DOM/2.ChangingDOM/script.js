const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const div1 = document.querySelector('#div1');
const div2 = document.querySelector('#div2');
const div3 = document.querySelector('#div3');

// btn.removeEventListener()
const changeText = () => div1.innerText = 'Ny text från js';
btn1.addEventListener('click', changeText);


btn2.addEventListener('click', function() {
     console.log(e.target);
     console.log(e.target.nextElementSibling);

     let h1 = document.createElement('h1');
     h1.innerText = 'Hej';
     h1.addEventListener('mouseover', () => console.log('over'))
     div3.appendChild(h1);

//      div3.innerHTML = `  
//      <ul id="list">
//      <li>1</li>
//      <li>2</li>
//      <li>3</li>
//  </ul> `
})