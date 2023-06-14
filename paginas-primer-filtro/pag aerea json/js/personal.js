let myForm = document.querySelector("#formulario");
let btnListar = document.getElementById("btnListar");
let tbodypersonal = document.querySelector("#tbodypersonal");

btnListar.addEventListener("click", async (e)=>{
    e.preventDefault();
    let accion = e.currentTarget.dataset.accion;
    if(accion === "Listar"){
        getUserAll();
    }
});

myForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    let data = Object.fromEntries(new FormData(e.target));
    opc[e.submitter.dataset.accion](data)
})

const opc = {
    "GET": () => getUserAll(),
    "POST": (data) => postUser(data),
    "DELETE": (data) => deleteUser(data)
}


let config = {
    headers: new Headers({ 
        "Content-Type": "application/json"
    }),
}

const getUserAll = async() => {
    config.method = "GET";
    let data = await ( await fetch("http://localhost:3000/personal",config)).json();
    mostrarData(data)
}

const postUser = async(data) => {
    config.method = "POST";
    config.body = JSON.stringify(data);
    let users = await ( await fetch("http://localhost:3000/personal",config)).json();
}

const deleteUser = async(id)=>{
    config.method = "DELETE";
    let del = await(await fetch(`http://localhost:3000/personal/${id}`,config)).json();
}

function mostrarData(data) {

    tbodypersonal.innerHTML = "",

    data.forEach((element) => {
        let tr = document.createElement("tr");
        tr.id = element.id;
        tr.innerHTML = `
        <td>${element.identificacion}</td>
        <td>${element.nombre}</td>
        <td>${element.apellido}</td>
        <td>${element.correo}</td>
        <td>${element.telefono}</td>
        <td>${element.profesion}</td>
        <td> <input type="submit" data-accion="DELETE" value="Eliminar" class="btn-guardar bg-danger border-0 rounded bg-secondary px-2">
        </td>
        `
        tbodypersonal.appendChild(tr)
    });
}

tbodypersonal.addEventListener("click", (e)=>{
    let id = e.target.parentElement.parentElement.id
   if (e.target.dataset.accion =="DELETE"){
    deleteUser(id);
   }
});