import Item from "./item.js";

((todo) => {

    const items = document.querySelector('#toDoItems');
    // const beforeend = 'beforeend';

    todo.save = function(){
        let items = document.querySelectorAll('li');
        let res = Array.from(items).map(i => new Item(i.childNodes[0].textContent, i.classList.contains('change')));
        localStorage.setItem('items', JSON.stringify(res));

        //load
        let result = JSON.parse(localStorage.getItem('items'));
        console.log(result);
        result.forEach(i => addItemToDom(i));
    }

    todo.addItem = function(e){
        
        e.preventDefault();
        const input = this['todoInput'];
        addItemToDom(new Item(input.value, false));
        input.value = '';
    }
    
    
    function addItemToDom(item) {
        items.insertAdjacentHTML('beforeend', 
        ` <li class="list-group-item ${item.isChecked ? 'change' : ''}">
        ${item.text}
        <button class="btn btn-danger">X</button>
        </li>`);
        
        let lastChild = items.lastElementChild;
        lastChild.addEventListener('click', change);
        lastChild.querySelector('button').addEventListener('click', remove);
        // items.querySelector('li:last-child button').addEventListener('click', remove )
    }

    function change(){
        this.classList.toggle('change');
    }

    function remove(){
        this.parentElement.remove();
    }
    
    
})(window.todo = window.todo || {});

document.querySelector('#todoForm').addEventListener('submit', todo.addItem);
document.querySelector('h1').addEventListener('click', todo.save);


