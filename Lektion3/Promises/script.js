const doSomething = (value) => {
        return new Promise( (resolve, reject) => {
                if(value){
                    resolve('Success')
                }
                else{
                    reject('Error')
                }

    })
}

// doSomething(true)
//         .then(data => console.log(data))
//         .catch(err => console.log(err))




const getRequest = (url) => {

    return new Promise( (resolve, reject) => {

        const http = new XMLHttpRequest();
    
        http.addEventListener('readystatechange', () => {
           if(http.readyState === 4 && http.status === 200){
                const data = JSON.parse(http.responseText);
                resolve(data);
           }
           else if(http.readyState === 4){
                reject('Error');
           }
        })
        
        http.open('GET', url)
        http.send();
    })
    
}

getRequest('user.json')
        .then(data => {
            console.log(data);
            return getRequest('todos.json')
        })
        .then(todos => {
            console.log(todos);
            return getRequest('todos2.json')
        })
        .then(todos2 => console.log(todos2))
        .catch(err => console.log(err))


// //Callback hell!
// console.log(1);
// console.log(2);
// console.log(3);

// getRequest('user.json', (err, data) => {
//     console.log(err, data);
//         getRequest('todos.json', (err, data) => {
//             console.log(err, data); 
//                 getRequest('todos2.json', (err, data) => {
//                     console.log(err, data) 
//                 })
//             })
// } );


// console.log(4);
// console.log(5);


    




  