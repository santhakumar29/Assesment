let listElm = document.querySelector('#app');
let start = 0;

function fetchData(startChange) {
    
    startChange = startChange ? startChange : 0;

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=20&_start=${startChange}`)
        .then(response => {
            if (!response.ok) {
                throw Error("ERROR");
            }
            return response.json();
        })
        .then(data => {

            for (let i = 0; i < data.length; i++) {
                let item = document.createElement('li');
                item.innerHTML = `
                <div class="card text-white bg-info mb-3" style="max-width: 100%;">
                    <div class="card-body">
                        <p class="card-text">${data[i].id}</p>
                        <h5 class="card-title">${data[i].title}</h5>
                        <p class="card-text">${data[i].body}</p>
                    </div>
                </div>
                `
                listElm.appendChild(item);
            }
        })
        .catch(error => {
            console.log(error);
        });
}

fetchData();

window.addEventListener('scroll' , ()=>{
    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        start = start + 20;
        fetchData(start);
    }
})