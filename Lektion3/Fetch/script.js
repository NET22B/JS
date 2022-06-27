let btn1 = document.querySelector('#btn1');
let textoutput = document.querySelector('#text-output');
// console.log(window);

// btn1.addEventListener('click', function(){
//     fetch('text.txt')
//         .then(res => res.text())
//         .then(data => {
//             console.log(data);
//             textoutput.innerHTML = `<p>${data}</p>`
//         })
// })


btn1.addEventListener('click', function(){
    fetch('text.txt')
        .then(function(res){
            // console.log(res);
            return res.text();
        })
        .then(function(data) {
            console.log(data);
            textoutput.innerHTML = `<p>${data}</p>`
        })
})

let btn2 = document.querySelector('#btn2');
let jsonoutput = document.querySelector('#json-output');

const getJson = () => {
    fetch('json.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);

            jsonoutput.innerHTML = "";
            data.forEach(post => {
                jsonoutput.innerHTML += 
                `
                <div class="card">
                <div class="card-body">
                    <h3 class="card-title">${post.title} </h3>
                    <p class="card-text"> ${post.body} </p>
                </div>
            </div>
                `
            })
        })
        .catch(error => console.log('Error: ' + error))
}

btn2.addEventListener('click', getJson)







