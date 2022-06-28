import UserService from "./3.Services/UserService.js";
import Person from "./2.Models/User.js" 
import {validate as val, sendMessage} from "./1.Functions/Functions.js"


const user = new Person('kALlE', 'Anka', 'kalle@anka.com', 'aaa111!')
console.log(user);
UserService.signUp({firstName: 'Kalle'})

val(user, u => UserService.signUp(u));
sendMessage('kalle', message => console.log(message) )