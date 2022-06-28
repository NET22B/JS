class Book{

    constructor(title, author, year){
        this.title = title
        this.author = author
        this.year = year
        this.revised = false
    }

    summary(){
        return `${this.title}`
    }

}

const book1 = new Book('C#', 'Kalle', 2020);
console.log(book1.summary());
// book1.log = () => {console.log('Hej')}
// console.log(book1.log());
// book1.year = [];

// let str //= new String('Hej');
// str = 5;
// str = []
// str.push('1')

class User{

    #firstName
    #lastName

    get firstName(){
        return this.#firstName;
    }

    /**
     * @param {string} value
     */
    set firstName(value){
        this.#firstName = value;
    }

    constructor(firstName, lastName){
        this.#firstName = firstName
        this.#lastName = lastName
    }

    #privateFunc(){
        console.log('private');
    }

    someOutherFunc(){
        this.#privateFunc();
    }
}

const user = new User('Kalle', 'Anka')
user.someOutherFunc();
console.log(user);