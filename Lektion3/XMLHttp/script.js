//HTTP request methods
// GET   - Hämta data 
// POST  - Skriva data 
// PUT   - Uppdaterar hela objektet
// PATCH - Uppdaterar delar eller hela objektet
// DELETE - Tar bort ett objekt


const getRequest = (url, cb) => {
    
    const http = new XMLHttpRequest();

    http.addEventListener('readystatechange', () => {
       if(http.readyState === 4 && http.status === 200){
            const data = JSON.parse(http.responseText);
            // console.log(data);
            cb(undefined, data);
       }
       else if(http.readyState === 4){
            cb('Server error', undefined);
       }
    })
    
    http.open('GET', url)
    http.send();
}

//Callback hell!
console.log(1);
console.log(2);
console.log(3);

getRequest('user.json', (err, data) => {
    console.log(err, data);
        getRequest('todos.json', (err, data) => {
            console.log(err, data); 
                getRequest('todos2.json', (err, data) => {
                    console.log(err, data) 
                })
            })
} );


console.log(4);
console.log(5);


    




  