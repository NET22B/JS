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

class Admin extends User{

    constructor(fname, lname, salary){
        super(fname, lname)
        this.salary = salary
    }

    adminFunc(){
        console.log('Admin func');
    }

    someOutherFunc(){
        super.someOutherFunc();
        console.log('From admin');
    }
}

// var user = new User('Kalle', 'Anka');
// user.adminFunc();

const admin = new Admin('Kalle', 'Anka', 2000);
admin.adminFunc();
admin.someOutherFunc();
console.log(admin);
// admin = [];
// console.log(admin);



