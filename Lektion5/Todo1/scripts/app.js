import Item from "./item.js";

((todo) => {

    const items = document.querySelector('#toDoItems');

    todo.save = function(){
        let items = document.querySelectorAll('li');
        let res = Array.from(items).map(i => new Item(i.childNodes[0].textContent, i.classList.contains('change')));
        console.log(res);
        localStorage.setItem('items', JSON.stringify(res));

        // let result = localStorage.getItem('items');
        // console.log(JSON.parse(result));
    }

    todo.addItem = function(e){
        
        e.preventDefault();
        const input = this['todoInput'];
        const li = createToDo(input.value);
        items.appendChild(li);
        input.value = '';
    }

    const createToDo = (input) => {
        let li = document.createElement('li');
        li.innerText = input;
        li.classList.add('list-group-item');
        li.addEventListener('click', change);

        let button = document.createElement('button');
        button.classList.add('btn', 'btn-danger');
        button.innerText = 'X';
        button.addEventListener('click', remove);

        li.appendChild(button);

        return li;
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


