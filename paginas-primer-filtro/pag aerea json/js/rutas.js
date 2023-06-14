let myForm = document.querySelector("#formulario");
let btnListar = document.querySelector("#btnListar");
let tbodyrutas = document.querySelector("#tbodyrutas");

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    opc[e.submitter.dataset.accion](data)
})

const opc = {
    "POST": (data) => postUser(data)
}


let config = {
    headers: new Headers({ 
        "Content-Type": "application/json"
    }),
}

const postUser = async(data) => {
    config.method = "POST";
    config.body = JSON.stringify(data);
    let users = await ( await fetch("http://localhost:3000/rutas",config)).json();
}

