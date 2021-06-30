function fetchData() {

    fetch("https://reqres.in/api/users")
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");
        }
        return response.json();
    }).then(data =>{
        console.log(data.data);
        const html = data.data.map(user =>{
            return `<div class="card mycard1 bg-primary">
            <div class="card-body mycard">
            <div>
            <img class="profileimg" src="${user.avatar}" alt="${user.first_name}"/>
            </div>
            <div>
            <h5 class="card-title">Name : ${user.first_name}</h5>
            <p class="card-text">Email : ${user.email}</p>
            </div>
            </div>
            </div>
            `

        }).join("");
        document.querySelector('#app').insertAdjacentHTML("afterbegin", html);
    }).catch(error =>{
        console.log(error);
    });
        
}
fetchData();